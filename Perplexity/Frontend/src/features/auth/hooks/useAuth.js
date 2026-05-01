import { useStore } from "react-redux";
import {Login , Register , getMe} from "../services/auth.api";
import { setUser  , setError , setLoading} from "../authSlice";

export function useAuth() {
    const store = useStore();   

    async function handleRegister({email, username , password}) {
        try {
            store.dispatch(setLoading(true));
            const user = await Register({email, username , password});
        } catch (error) {
            store.dispatch(setError(error.message));
        } finally {
            store.dispatch(setLoading(false));
        }

    }

    async function handleLogin({email, password}) {
        try {
            store.dispatch(setLoading(true));
            const user = await Login({email, password});
            store.dispatch(setUser(user));
        } catch (error) {
            store.dispatch(setError(error.message));
        } finally {
            store.dispatch(setLoading(false));
        }
    }

    async function handleGetMe() {  
        try {
            store.dispatch(setLoading(true));
            const user = await getMe();
            store.dispatch(setUser(user));
        } catch (error) {
            store.dispatch(setError(error.message));
        } finally {
            store.dispatch(setLoading(false));
        }       
    }

    return {
        handleRegister,
        handleLogin,
        handleGetMe,
    }
}

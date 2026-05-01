import { useDispatch } from "react-redux";
import {login , register , getMe} from "../services/auth.api";
import { setUser  , setError , setLoading} from "../auth.slice";

export function useAuth() {
    const dispatch = useDispatch();   

    async function handleRegister({email, username , password}) {
        try {
            dispatch(setLoading(true));
            const user = await register({email, username , password});
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }

    }

    async function handleLogin({email, password}) {
        try {
            dispatch(setLoading(true));
            const user = await login({email, password});
            dispatch(setUser(user));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }
    }

    async function handleGetMe() {  
        try {
            dispatch(setLoading(true));
            const user = await getMe();
            dispatch(setUser(user));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }       
    }

    return {
        handleRegister,
        handleLogin,
        handleGetMe,
    }
}

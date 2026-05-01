import { Router } from "express";
import { register, login, getMe } from "../controllers/auth.controllers.js";
import {registerValidationRules, loginValidator } from "../validators/auth.validators.js";
import { authUser } from "../middlewares/auth.middlewares.js";

const authRouter = Router();

authRouter.post("/register", registerValidationRules,register);


/**
 * @route POST /api/auth/login
 * @desc Login user and return JWT token
 * @access Public
 * @body { email, password }
 */
authRouter.post("/login", loginValidator, login)



/**
 * @route GET /api/auth/get-me
 * @desc Get current logged in user's details
 * @access Private
 */
authRouter.get('/get-me', authUser, getMe)

export default authRouter;
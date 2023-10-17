import express from "express";
// import { google, loginUser, signupUser } from "../controllers/userController.js";
import {  loginUser, signupUser } from "../controllers/userController.js";

//controller function
const router = express.Router();

router.use(express.json());
// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

//router.post('/google', google)

export default router;
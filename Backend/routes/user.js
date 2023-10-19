import express from "express";
// import { google, loginUser, signupUser } from "../controllers/userController.js";
import {  loginUser, signInfirebase, signupUser, signupUserFromFirebase, auth } from "../controllers/userController.js";

//controller function
const router = express.Router();

router.use(express.json());
// login route
router.post('/login', loginUser)


router.post('/signup', signupUser)

router.post('/signupfirebase', signupUserFromFirebase)

router.post('/signInfirebase', signInfirebase)

router.get('/:email',auth)

//router.post('/google', google)

export default router;
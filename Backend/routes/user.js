import express from "express";
import {  loginUser, signInfirebase, signupUser, signupUserFromFirebase, auth } from "../controllers/userController.js";

const router = express.Router();

router.use(express.json());

router.post('/login', loginUser)
router.post('/signup', signupUser)
router.post('/signupfirebase', signupUserFromFirebase)
router.post('/signInfirebase', signInfirebase)
router.get('/:email',auth)

export default router;
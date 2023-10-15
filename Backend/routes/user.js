import express from "express";
import { loginUser, signupUser } from "../controllers/userController.js";

//controller function
const router = express.Router();

router.use(express.json());
// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

export default router;
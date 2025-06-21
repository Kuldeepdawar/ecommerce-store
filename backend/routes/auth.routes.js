import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

// router declate with express server
const router = express.Router();

// router used get for signup page
router.get("/signup", signup);

// this endpoint provide a login page
router.get("/login", login);

// this provide a logout

router.get("/logout", logout);

export default router;

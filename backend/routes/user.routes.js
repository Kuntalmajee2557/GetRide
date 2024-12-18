import express from "express"
import {loginUser, registerUser} from "../controllers/user.contoller.js";
import {body} from 'express-validator'
const router =  express.Router();


router.post("/register", [
    body('email').isEmail().withMessage("Invalid email"),
    body('fullname.firstname').isLength({min: 3}).withMessage("Please enter atleast 3 charecter"),
    body('password').isLength({min: 6}).withMessage("Please enter atleast 3 charecter"),
],
registerUser)


router.post("/login", [
    body('email').isEmail().withMessage("Invalid email"),
    body('password').isLength({min: 6}).withMessage("Please enter atleast 3 charecter"),
],
loginUser)

export default router;  
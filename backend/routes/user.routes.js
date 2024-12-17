import express from "express"
import userContoller from "../controllers/user.contoller.js";
import {body} from 'express-validator'
const router =  express.Router();


router.post("/register", [
    body('email').isEmail().withMessage("Invalid email"),
    body('fullname.firstname').isLength({min: 3}).withMessage("Please enter atleast 3 charecter"),
    body('password').isLength({min: 6}).withMessage("Please enter atleast 3 charecter"),
],
userContoller)

export default router;  
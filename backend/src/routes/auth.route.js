import express from "express";
import { workerpostLogin, workerpostSignup ,postLogin, postSignup } from "../controller/auth.controller.js";
const router = express.Router();

router.post('/user/signup', postSignup);
router.post('/user/login', postLogin);
router.post('/worker/signup', workerpostSignup);
router.post('/worker/login', workerpostLogin);

export default router;
import express from 'express';
import upload from "../utils/multer.util.js";
import { verifyjwt } from '../middlewares/verifyJWT.middleware.js';
import { postupdateProfile, postScanWaste, updateFeedback, getUser, gettingFeedback } from '../controller/user.controller.js';

const router = express.Router();
router.post('/scanwaste',verifyjwt,upload.array("images"),postScanWaste);
router.post('/updateProfile',verifyjwt,upload.single("image"),postupdateProfile);
router.post('/feedback',verifyjwt,updateFeedback);
router.post('/getUser',verifyjwt,getUser);
router.post('/getFeedback',gettingFeedback);




export default router;



import express from 'express';
import { verifyjwtWorker } from '../middlewares/verifyJWT.middleware.js';
import { getTasks,postUpdateTask, updateFeedback, postupdateProfile, getWorker } from '../controller/worker.controller.js';
const router = express.Router();
import upload from '../utils/multer.util.js';

router.post('/getTask',getTasks);
router.post('/updateTask',verifyjwtWorker,postUpdateTask);
router.post('/feedback',verifyjwtWorker,updateFeedback);
router.post('/updateProfile',verifyjwtWorker,upload.single("image"),postupdateProfile);
router.post('/getworker',verifyjwtWorker,getWorker);


export default router;
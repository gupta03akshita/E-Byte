import Tasks from "../models/tasks.model.js";
import Worker from "../models/worker.model.js";
import ErrorWrapper from "../utils/ErrorWrapper.util.js";
import ErrorHandler from "../utils/ErrorHandler.util.js";
import User from "../models/user.model.js";
import mongoose from "mongoose";

export const postupdateProfile = ErrorWrapper( async (req, res, next)=>{
    const {name, email, phoneNumber, area, pincode, state} = req.body;
    try{
        const user = req.worker;
        user.name = name;
        user.email = email;
        user.phoneNumber = phoneNumber;
        user.location = {area, pincode, state};
        let cloudinaryResponse = await uploadOnCloudinary(req.file.path);
        user.profileImage = cloudinaryResponse;
        await Worker.save();
        res.status(200).json({
            success: true,
            message: "Profile updated successfully"
        })
    
    }catch(Err) {
        throw new ErrorHandler(500, "Error while updating profile, " + Err);
    }
})

export const getTasks = ErrorWrapper( async (req, res, next)=>{
    try{
        // let pincode = req.worker.location.pincode;
        let tasks = await Tasks.find().populate('user', 'name email phoneNumber order');
        res.status(200).json({
            success: true,
            tasks: tasks
        })
    }catch(Err) {
        throw new ErrorHandler(500, "Error while fetching tasks, " + Err);
    }
})

//error
export const postUpdateTask = ErrorWrapper(async (req, res, next)=>{
    const {taskId, status, cashback} = req.body;
    try{
        let alltask = await Tasks.find();
        let task;
        alltask.forEach(t=>{
            if(t._id.toString() === taskId){
                task = t;
            }
        })
        if(task === undefined) {
            throw new ErrorHandler(404, "Task not found!");
        }
        let userId = task.user;
        console.log(userId);
        let user = await User.findById(userId);
        user.status = status;
        user.cashbackEarned = (+user.cashbackEarned) + cashback;
        user.currentRequestId = null;
        await user.save();
        // await Tasks.findByIdAndDelete(taskId);
        res.status(200).json({
            success: true,
            message: "Task status updated successfully"
        })
    }catch(Err) {
        throw new ErrorHandler(500, "Error while updating task status, " + Err);
    }   
})

export const updateFeedback = ErrorWrapper(async (req, res, next) => {
    try{
        const user = req.wokrer;
        user.feedback = req.body.feedback;
        await user.save();
        res.status(200).json({
            success: true,
            message: "Feedback submitted successfully"
        })
    }catch(err) {
        throw new ErrorHandler(500, "Error while submitting feedback, " + err);
    }
})

export const getWorker = ErrorWrapper(async (req, res, next) => {
    try{
        const user = req.worker;
        res.status(200).json({
            success: true,
            user
        })
    }catch(err) {
        throw new ErrorHandler(500, "Error while getting user, " + err);
    }
})



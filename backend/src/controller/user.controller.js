import User from "../models/user.model.js";
import ErrorHandler from "../utils/ErrorHandler.util.js";
import ErrorWrapper from "../utils/ErrorWrapper.util.js";
import uploadOnCloudinary, { uploadBatchOnCloudinary } from "../utils/uploadOnCloudinary.util.js";
import Tasks from "../models/tasks.model.js";
import axios from "axios";


export const postScanWaste = ErrorWrapper(async (req, res, next) => {
    const {age, scrap, price, area, pincode, nearbyPlace, WasteAmount} = req.body;
    if (req.files.length == 0) {
        throw new ErrorHandler(400, "Please upload at least one image");
    }
    let cloudinaryResponse = [];
    try{
        cloudinaryResponse = await uploadBatchOnCloudinary(req.files);
    }catch(err) {
        console.log(err);
        throw new ErrorHandler(500, `Error while uploading image`);
    }
    //calculation
    try{
        // let ans = [];
        // cloudinaryResponse.forEach(async url=>{
            // axios({
            //     method: "POST",
            //     url: "https://detect.roboflow.com/e-waste-dataset-r0ojc/43",
            //     params: {
            //         api_key: "Vj75TnVyRZm73jghPB5v",
            //         image: url
            //     }
            // })
            // .then(function(response) {
            //     console.log(response.data);
            // })
            // .catch(function(error) {
            //     console.log(error.message);
            // });
            // let responseRobo = axios.post("https://detect.roboflow.com/e-waste-dataset-r0ojc/43",{
            //     params: {
            //         api_key: "Vj75TnVyRZm73jghPB5v",
            //         image: url
            //     }
            // });
            // ans.push(responseRobo.data);
            // console.log(responseRobo.data);
        // })
        


        let pointsGenerated = [50,100];
        
        let user = req.user;
        if(user.currentRequestId != null) {
            throw new ErrorHandler(400, "Wait till the previous request is validated");
        }

        let newRequest = {
            location: {
                area,
                pincode,
                nearbyPlace
            },
            pics:cloudinaryResponse,
            WasteAmount,
            status: 'Pending',
            pointsAllocated : {
                points: pointsGenerated
            }
        }

        user.order = newRequest;
        user.currentRequestId = user.order._id;
        await user.save();
        let task = await Tasks.create({
            user: user._id,
            request: user.currentRequestId,
            status: "Pending",
            pincode
        });

        await task.save();

        res.status(201).json({
            success: true,
            RoughCashbackEstimation: pointsGenerated,
            requestId: user.currentRequestId,
            message: "Scanned successfully"
        })
    }catch(err) {
        throw new ErrorHandler(500, "Error while scanning waste");
    }
});


export const postupdateProfile = ErrorWrapper( async (req, res, next)=>{
    const {name, email, phoneNumber, area, pincode, state} = req.body;
    try{
        const user = req.user;
        user.name = name;
        user.email = email;
        user.phoneNumber = phoneNumber;
        user.location = {area, pincode, state};
        let cloudinaryResponse = await uploadOnCloudinary(req.file.path);
        user.profileImage = cloudinaryResponse;
        await user.save();
        res.status(200).json({
            success: true,
            message: "Profile updated successfully"
        })
    
    }catch(Err) {
        throw new ErrorHandler(500, "Error while updating profile, " + Err);
    }
})

export const updateFeedback = ErrorWrapper(async (req, res, next) => {
    try{
        const user = req.user;
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

export const getUser = ErrorWrapper(async (req, res, next) => {
    try{
        const user = req.user;
        res.status(200).json({
            success: true,
            user
        })
    }catch(err) {
        throw new ErrorHandler(500, "Error while getting user, " + err);
    }
})

export const gettingFeedback = ErrorWrapper(async (req,res,next) => {
    try{
        const feedback = await User.find({}, 'feedback');
        res.status(200).json({
            success: true,
            feedback: feedback
        })
    }catch(err) {
        throw new ErrorHandler(500, "Error while getting feedback, " + err);
    }
})

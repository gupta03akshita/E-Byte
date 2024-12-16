import mongoose,{ Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const workerSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    name: {
        type:String,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type:String,
        required: true
    },
    email:{ 
        type:String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phoneNumber:{
        type:String,
        unique: true
    },
    profileImage: {
        type: String, // cloudinary url
    },
    location: {
        type: Object,
        required: true,
        area: {
            type: String,
            required:true,
        },
        pincode:{
            type: String,
            required:true,
        },
        state: {
            type: String,
            required:true,
        }
    },
    role: {
        type: String,
        required: true
    },
    refreshToken:{
        type:String,
    },
    feedback:{
        type:String
    }
},{
    timestamps: true
});

workerSchema.methods.isPasswordCorrect = async function (enteredPassword) {
    const user = this;
    return await bcrypt.compare(user.password, enteredPassword);
}

workerSchema.methods.generateRefreshToken = async function () {
    return jwt.sign(
        {
            userId: this._id
        },
        process.env.REFRESH_TOKEN_KEY
        ,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        });
}

workerSchema.pre('save', function (next) {
    if (!this.isModified("password")) return next();

    const user = this;
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    });
});


workerSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            userId: this._id,
            email: this.email,
            username: this.username,
            name: this.name
        },
        process.env.ACCESS_TOKEN_KEY
        ,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        });
}



const Worker = mongoose.model('Worker', workerSchema);
export default Worker;
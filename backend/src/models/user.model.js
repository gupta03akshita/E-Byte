import mongoose,{ Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new Schema({
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
    },
    profileImage: {
        type: String, // cloudinary url
    },
    location: {
        type: Object,
        area: {
            type: String
        },
        pincode:{
            type: String
        },
        state: {
            type: String
        }
    },
    order:  
        {
            type:Object,
            location: {
                area:{
                    type: String
                },
                pincode:{
                    type: String
                },
                nearbyPlace:{
                    type: String
                }
            },
            pics:[
                {
                    type:String // urls
                }
            ],
            WasteAmount:{
                type: Number, // in Kgs/Tons
            },  //Amount of waste in Kgs/Tons
            status: {
                type:String,
                required: true
            },
            pointsAllocated : {
                type: String,
            },
            cashback: {
                type: Number,
                default: 0
            },
            date:{
                type: Date,
                defualt : Date.now
            }
        },
    cashbackEarned:{
        type:Number,
        default: 0
    },
    currentRequestId: {
        type:Schema.Types.ObjectId,
        ref: 'User.history'
    },
    role: {
        type: String,
        required: true
    },
    refreshToken:{
        type:String,
    },
    feedback: {
        type: String
    }
},{
    timestamps: true
});

userSchema.methods.isPasswordCorrect = async function (enteredPassword) {
    const user = this;
    return await bcrypt.compare(user.password, enteredPassword);
}

userSchema.methods.generateRefreshToken = async function () {
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

userSchema.pre('save', function (next) {
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




userSchema.methods.generateAccessToken = async function () {
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



const User = mongoose.model('User', userSchema);
export default User;
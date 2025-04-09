import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    message:{
        type: String,
        required: true 
    },
    date:{
        type: Date,
        default: Date.now
    }
},{timestamps:true});

const User = mongoose.model("User", userSchema);
export default User;


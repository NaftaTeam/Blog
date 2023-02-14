import {Schema} from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
    name: {
        first: {type: String, default: "John"},
        last: {type: String, default: "Doe"}
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    imgUri: {
        type: String,
        default: "default.png"
    }
});

export default mongoose.model('User', userSchema);
import {Schema, model} from "mongoose";
import UserModel from "./user.model.js";

const postModel = new Schema({
    user: {
        type: UserModel.schema,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now()
    }
});

export default model('Post', postModel);
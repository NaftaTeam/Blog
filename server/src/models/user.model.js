import {Schema, model} from "mongoose";

const userModel = new Schema({
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

export default model('User', userModel);
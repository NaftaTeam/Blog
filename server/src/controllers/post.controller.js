import PostModel from "../models/post.model.js";
import UserModel from "../models/user.model.js";

export default {
    getPosts: async(req, res) => {
        res.json(await PostModel.find({}));
    },
    createPost: async(req, res) => {
        await PostModel.create({
            user: await UserModel.findById(req.params.id),
            title: req.body.title,
            text: req.body.text
        });
        res.json({
            message: 'Added'
        });
    },
    updatePost: async(req, res) => {
        await PostModel.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            text: req.body.text
        });
        res.json({
            message: "Updated"
        });
    },
    deletePost: async(req, res) => {
        await PostModel.findByIdAndDelete(req.params.id);
        res.json({
            message: 'Deleted'
        });
    }
}
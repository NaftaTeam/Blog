import UserModel from '../models/user.model.js';

export default {
    getUsers: async(req, res) => {
        res.json(await UserModel.find({}));
    },
    createUser: async(req, res) => {
        await UserModel.create({
            name: req.body.name,
            nickname: req.body.nickname,
            password: req.body.nickname
        });
        res.json({
            message: "Added"
        });
    },
    updateUser: async(req, res) => {
        await UserModel.findByIdAndUpdate(req.params.id, {name: {first: req.body.first, last: req.body.last}});
        res.json({
            message: "Updated"
        });
    },
    deleteUser: async(req, res) => {
        await UserModel.findByIdAndDelete(req.params.id);
        res.json({
            message: "Deleted"
        });
    }
}
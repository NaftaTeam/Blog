import {Router} from "express";
import userController from "../controllers/user.controller.js";

const router = new Router();

router.route('/user')
    .get(userController.getUsers)
    .post(userController.createUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

export default router;
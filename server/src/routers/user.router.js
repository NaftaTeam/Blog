import {Router} from "express";
import userController from "../controllers/user.controller.js";
import bodyParser from 'body-parser';

const router = new Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json();

router.use(urlencodedParser);
router.use(jsonParser);

router.route('/user')
    .get(userController.getUsers)
    .post(userController.createUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

export default router;
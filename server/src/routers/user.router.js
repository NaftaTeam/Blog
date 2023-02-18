import {Router} from "express";
import userController from "../controllers/user.controller.js";
import bodyParser from 'body-parser';

const router = new Router();

const jsonParser = bodyParser.json();

router.use(jsonParser);

router.get('/user', userController.getUsers)
router.post('/user', userController.createUser)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

export default router;
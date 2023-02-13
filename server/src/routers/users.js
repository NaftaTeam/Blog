import {Router} from "express";
import usersController from "../controllers/users.js";

const router = new Router();

router.get('/', usersController.getUsers);

router.post('/register', usersController.registration);

router.post('/login', usersController.login);

export default router;
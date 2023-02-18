import {Router} from "express";
import postController from "../controllers/post.controller.js";

const router = new Router();

router.get('/post', postController.getPosts)
router.post('/post/:id', postController.createPost)
router.put('/post/:id', postController.updatePost)
router.delete('/post/:id', postController.deletePost)


export default router;
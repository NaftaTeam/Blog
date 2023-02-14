import {Router} from "express";
import postController from "../controllers/post.controller.js";

const router = new Router();

router.route('/post')
    .get(postController.getPosts)
    .post(postController.createPost)
    .put(postController.updatePost)
    .delete(postController.deletePost);

export default router;
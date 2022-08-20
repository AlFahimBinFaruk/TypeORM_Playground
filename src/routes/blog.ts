import {Router} from "express"

const router=Router()

//controllers
import {getAllBlogs,getBlogDetails,createBlog,updateBlog,deleteBlog} from "../controllers/blog"

// get all blogs
router.get("/",getAllBlogs)

// get blog details
router.get("/:id",getBlogDetails)

// create blog
router.post("/create",createBlog)

// update blog
router.patch("/update/:id",updateBlog)

// delete blog
router.delete("/delete/:id",deleteBlog)

export default router
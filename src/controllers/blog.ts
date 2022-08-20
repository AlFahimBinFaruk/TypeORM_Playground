import { Blog } from "../entity/blog";
import { AppDataSource } from "../data-source";
//create new blog
const createBlog = async (req: any, res: any) => {
  const { title, description } = req.body;

  //create
  const newBlog = Blog.create({
    title,
    description,
  });

  // save it
  newBlog.save();
  res.status(200).json(newBlog);
};

//get all blogs
const getAllBlogs = async (req: any, res: any) => {
  // find all blogs
  const blogList = await Blog.find();
  //   send res
  res.status(200).json(blogList);
};

//get blog details
const getBlogDetails = async (req: any, res: any) => {
  // find blog details
  const blogDetails = await Blog.findOneBy({ id: req.params.id });
  // send details
  res.status(200).json(blogDetails);
};

//update blog
const updateBlog = async (req: any, res: any) => {
  // update the blog using query builder
  await AppDataSource.createQueryBuilder()
    .update(Blog)
    .set(req.body)
    .where("id = :id", { id: req.params.id })
    .execute();
  // send the updated blog details(the method that we have use above is efficent but wont give us the updated blog details)
  const updatedBlog = await Blog.findOneBy({ id: req.params.id });
  // send updated blog details
  res.status(200).json(updatedBlog);
};

// delete blog
const deleteBlog = async (req: any, res: any) => {
  // delete the blog using query builder
  await AppDataSource.createQueryBuilder()
    .delete()
    .from(Blog)
    .where("id = :id", { id: req.params.id })
    .execute();

  // send deleted blog id
  res.status(200).json({ msg: "deleted", id: req.params.id });
};

export { createBlog, getAllBlogs, getBlogDetails, updateBlog, deleteBlog };

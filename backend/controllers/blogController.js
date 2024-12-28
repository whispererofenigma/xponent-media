// controllers/blogController.js
const Blog = require('../models/Blogs');

exports.getBlogs = async (req, res) => {
    const blogs = await Blog.find().sort({ createdAt: -1 }).limit(3); // Fetch latest 3 blogs
    res.json(blogs);
};

exports.getBlogById = async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
};

exports.createBlog = async (req, res) => {
    const { title, content, tags, coverImage } = req.body;
    const newBlog = new Blog({ title, content, tags, coverImage });
    await newBlog.save();
    res.status(201).json(newBlog);
};

exports.updateBlog = async (req, res) => {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBlog);
};

exports.deleteBlog = async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(204).send();
};

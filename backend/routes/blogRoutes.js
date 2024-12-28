// routes/blogRoutes.js
const express = require('express');
const { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
const router = express.Router();

// Public Routes
router.get('/', getBlogs);
router.get('/:id', getBlogById);

// Admin Routes
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;

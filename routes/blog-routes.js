const express = require('express');
const router = express.Router();
const blogcontroller = require('../controllers/blogs');

router.get('/', blogcontroller.getBlogs);
router.get('/:id', blogcontroller.getBlogById);
router.post('/', blogcontroller.createBlog);
router.patch('/edit/:id', blogcontroller.updateBlog);
router.delete('/:id', blogcontroller.deleteBlog);
router.patch('/description/:id', blogcontroller.updateDescription);
router.patch('/rating/:id', blogcontroller.updateRating);
router.patch('/favorite/:id', blogcontroller.updateIsFav);
router.get('/favorite', blogcontroller.getFavoriteBlogs);
router.get('/top-rated', blogcontroller.getTopRatedBlogs);
router.get('/sort-by-name', blogcontroller.sortBlogsbyName);
router.get('/filter', blogcontroller.filterBlogsByRatingandFavorite);
router.get('/count', blogcontroller.getBlogCount);
router.delete('/clear-favorite', blogcontroller.clearAllFavorite);


module.exports = router;

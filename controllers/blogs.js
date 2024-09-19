const Blog = require('../models/blog');

exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });

        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createBlog = async (req, res) => {
    const blog = new Blog({
        ...req.body
    });

    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true } );
        if (!updatedBlog) return res.status(404).json({ message: 'Blog not found' });

        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.deleteBlog = async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

        if (!deletedBlog) return res.status(404).json({ message: 'Blog not found' });

        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updateDescription = async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, { description: req.body.description }, { new: true } );
        if (!updatedBlog) return res.status(404).json({ message: 'Blog not found' });

        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateRating = async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, { rating: req.body.rating }, { new: true } );
        if (!updatedBlog) return res.status(404).json({ message: 'Blog not found' });

        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateIsFav = async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, { isFav: req.body.isFav }, { new: true } );
        if (!updatedBlog) return res.status(404).json({ message: 'Blog not found' });

        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getFavoriteBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ isFav: true });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTopRatedBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ rating: -1 }).limit(5);
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.sortBlogsbyName = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ name: 1 });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.filterBlogsByRatingandFavorite = async (req, res) => {
    try {
        const blogs = await Blog.find({ rating: { $gte: req.query.minRating }, isFav: true });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.clearAllFavorite = async (req, res) => {
    try {
        const deletedBlogs = await Blog.updateMany({ isFav: true }, { isFav: false });
        res.status(200).json({ message: `${deletedBlogs.nModified} blogs cleared from being favorite` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getBlogCount = async (req, res) => {
    try {
        const count = await Blog.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
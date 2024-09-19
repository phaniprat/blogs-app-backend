const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const BlogRoutes = require('./routes/blog-routes');

const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.use('/api/blogs', BlogRoutes);

const port = process.env.PORT || 4000;


mongoose.connect("mongodb+srv://phaneendrakumar:ztrKnM1SeymbcZ5T@cluster0.odbxg.mongodb.net/blogs?retryWrites=true&w=majority")
.then(() => 
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    }))
  .catch(err => console.log(err));
console.clear();
const mongoose = require('mongoose');
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');

require('dotenv').config();

const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json()); // -> Allows to parse json data
app.use('/images', express.static(path.join(__dirname, '../images')));

mongoose
  .connect(process.env.MONGODB_URL)
  .then(console.log('database connected'))
  .catch((error) => console.log(error));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json({ status: 'success' });
});

// middleware
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);
app.use('/api/categories', categoryRoute);
app.listen(PORT, () => console.log(`server running on port ${PORT}`));

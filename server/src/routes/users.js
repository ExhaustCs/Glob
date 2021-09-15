const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

// UPDATE
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          //   add all fields from the request body
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).send(error.code);
    }
  } else {
    res.status(401).send('You dont have permissions to this account');
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.send({ status: 'success' });
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json('User not found!');
    }
  } else {
    res.status(401).json('You can delete only your account!');
  }
});

// GET USER
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) res.send(user);
    else res.send('user not found');
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET USERS
router.get('/', async (req, res) => {
  try {
    const user = await User.find();
    if (user) res.send(user);
    else res.send('user not found');
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

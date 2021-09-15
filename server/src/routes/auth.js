const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// register user
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPass,
    });
    const user = await newUser.save();
    res.send({ status: 'success', response: user._id });
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: 'failed', response: error.message });
  }
});

// login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // !user && res.status(400).json('wrong credentials');
    const validated = await bcrypt.compare(req.body.password, user.password);
    // !validated && res.status(400).json('wrong credentials');
    const { password, ...others } = user._doc;
    return res.status(200).json(others);
    // return res.send({ status: 'success' });
  } catch (error) {
    return res.status(400).send({ status: 'failed', response: error.message });
  }
});
module.exports = router;

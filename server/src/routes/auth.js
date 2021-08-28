const router = require("express").Router();
const User = require("../models/User");

// register user

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({
      username,
      email,
      password,
    });
    const user = await newUser.save();
    res.sendStatus(200).json(user);
  } catch (error) {
    res.sendStatus(500).json(error);
  }
});

module.exports = router;

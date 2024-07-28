const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (err) {
    res.status(404).send(err);
  }
};
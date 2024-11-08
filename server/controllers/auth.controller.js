const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../keys");
const User = require("../models/user.model");

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0//", salt);

module.exports.login = async (req, res) => {
  const candidate = await User.findOne({ login: req.body.login });

  if (candidate) {
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      candidate.password,
      hash
    );

    if (isPasswordCorrect) {
      const token = jwt.sign(
        {
          login: candidate.login,
          userId: candidate._id,
        },
        keys.JWT,
        { expiresIn: 60 * 60 }
      );
      res.json({ token });
    } else {
      res.status(401).json({ message: "Пароль неверен" });
    }
  } else {
    res.status(404).json({ message: "Пользователь не найден" });
  }
};

module.exports.createUser = (req, res) => {};

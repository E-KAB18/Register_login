const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const util = require("util");
const User = require("./UserModel");

const asynSign = util.promisify(jwt.sign);

const signUp = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) throw new Error("user already exists");
        const newUser = new User({ firstName, lastName, email, password });
        const createdUser = await newUser.save();
        res.send(createdUser);
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
};

const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error("invalid email or password");
        const { password: originalHashedPassword } = user;
        const result = await bcrypt.compare(password, originalHashedPassword);
        if (!result) throw new Error("invalid email or password");
        const { id: uID } = user;
        const token = await asynSign(
            { id: uID }, "secret");
        // { expiresIn: process.env.JWT_EXPIRES_IN }
        res.send({ token });
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
};

module.exports = { signUp, login };
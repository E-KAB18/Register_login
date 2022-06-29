const express = require("express");
const userRouter = express.Router();
const { signUp, login } = require("./UserControllers");
const { passwordHash } = require("./Middleware");

userRouter.post("/signUp", passwordHash, signUp);
userRouter.post("/signIn", login);

module.exports = userRouter;

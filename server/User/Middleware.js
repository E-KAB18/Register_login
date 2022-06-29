const bcrypt = require("bcrypt");

const passwordHash = async (req, res, next) => {
    const saltRounds = 10;
    if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    }
    next();
};

module.exports = { passwordHash };
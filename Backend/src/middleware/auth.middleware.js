const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (token) {
    try {
      let user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
      req.body.userID = user.userID;
      next();
    } catch (error) {
      return res.status(498).send({ message: error.message });
    }
  } else {
    return res.status(499).send({ message: "Missing token" });
  }
};

module.exports = authMiddleware;

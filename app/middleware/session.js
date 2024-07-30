const session = require("express-session");

module.exports = session({
  secret: "100checkbox",
  resave: true,
  saveUninitialized: true,
});

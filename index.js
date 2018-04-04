const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");
//require('./routes/authRoutes');

mongoose.connect(keys.mongooseURI);
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// app.use(
//   session({
//     resave: false,
//     saveUninitialized: true,
//     secret: "bla bla bla"
//   })
// );
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT);

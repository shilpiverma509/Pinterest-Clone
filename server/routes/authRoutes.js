const passport = require("passport");

module.exports = app => {
  //route-handlers
  app.get("/auth/twitter", passport.authenticate("twitter"));

  app.get("/auth/twitter/callback", passport.authenticate("twitter"));

  //logout route handler
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  //authenticated user's data
  app.get("/api/current_user", (req, res) => {
    //res.send(req.session);
    res.send(req.user);
  });
};

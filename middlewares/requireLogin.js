/**
 *
 * make sure the user is logged in before we allow
 * some particular route handler to be executed
 */

module.exports = (req, res, next) => {
  if (!req.user) {
    res.status(401).send({ error: "You must log in" });
  }
  next(); //if it has found a user
};

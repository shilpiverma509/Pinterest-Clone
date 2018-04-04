const passport = require("passport");
const TwitterStrategy = require("passport-twitter").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.TWITTER_CONSUMER_KEY,
      consumerSecret: keys.TWITTER_CONSUMER_SECRET,
      includeEmail: true,
      callbackURL: "/auth/twitter/callback"
    },
    async (token, tokenSecret, profile, done) => {
      const existingUser = await User.findOne({
        twitterID: profile.id
      });
      if (existingUser) {
        //we already have a user with this twitter ID
        return done(null, existingUser);
      }
      const user = await new User({ twitterID: profile.id }).save();
      done(null, user);
    }
  )
);

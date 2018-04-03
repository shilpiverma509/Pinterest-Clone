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
    (token, tokenSecret, profile, done) => {
      User.findOne({
        twitterID: profile.id
      }).then(existingUser => {
        if (existingUser) {
          //we already have a user with this twitter ID
          done(null, existingUser);
        } else {
          new User({ twitterID: profile.id }).save().then(user => {
            done(null, user);
          });
        }
      });
    }
  )
);

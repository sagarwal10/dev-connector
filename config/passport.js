const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

// From https://www.udemy.com/mern-stack-front-to-back/learn/v4/t/lecture/10055158?start=0

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
	User.findById(jwt_payload.id)
	  .then(user => {
	      if (user) {
		 // user details returned as payload
		 return done(null, user);
	      }
	      return (null, false);
	  })
	  .catch(err => console.log(err));
    }));
}
    

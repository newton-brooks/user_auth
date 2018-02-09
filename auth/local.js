const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
const init = require('./passport')
const helpers = require('./helpers')


const connectionString = "postgres://localhost/userlist";
const pgp = require("pg-promise")({});
const db = pgp(connectionString);


const options = {}


init()

passport.use(
    new localStrategy(options, (username, password, done ) => {
        db.any ('SELECT * FROM users WHERE username = $1', [username])
        .then((rows) => {
            const user = rows[0]
            if(!user) {
                return done(null, false);
            }
            if(!helpers.comparePass(password, user.password_digest)) {
                return done(null, false)
            } else {
                return done(null, user)
            }
        })
        .catch((err)=> {
            console.log(`login err     `, err)
            return done(err)
        })
    })
)


module.exports = passport


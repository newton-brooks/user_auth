const passport = require('passport')
const connectionString = "postgres://localhost/userlist";
const pgp = require("pg-promise")({});
const db = pgp(connectionString);


module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.username);
    })
    passport.deserializeUser((username, done) => {
        db.one('SELECT * FROM users WHERE username=${username}', {username: username})
        .then((user)=> {
            done(null, user)
        })
        .catch((err) => {
            done(err, null)
        })
    })
}


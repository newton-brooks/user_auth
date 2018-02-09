var express = require('express');
var router = express.Router();
const db = require('../db/queries')
const passport = require('../auth/local')

/* GET users listing. */
router.post('/new', db.createUser );
function loginRequired(req, res, next) {
  console.log(`logging in`)
  next()
}
router.post('/login', loginRequired, passport.authenticate('local'), (req, res) => {
  res.json(req.user);
})


module.exports = router;

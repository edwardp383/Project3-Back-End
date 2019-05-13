const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcryptjs');


router.post('/', async (req, res) => {
	const password = req.body.password
	const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
	const userDbEntry = {};
	userDbEntry.username = req.body.username;
	userDbEntry.password = passwordHash;
	userDbEntry.email = req.body.email
	try{
		const createdUser = await User.create(userDbEntry);
		if(createdUser){
			req.session.logged = true;
			req.session._id = createdUser._id;
			console.log(createdUser);
			req.session.message = "Account Created. Thank you!"
		} else {
			req.session.message = "A required field is incomplete"
		}
	} catch (err) {
		console.log(err);
	}
})





// GET /user/:id -- gets user's information

// DELETE /user/:id -- deletes the user's account

// PUT /user/:id -- edits information on the user's account
//   request body should include:
//       username:
//       password:
//       email:
module.exports = router;
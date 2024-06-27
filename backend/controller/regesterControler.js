const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// import bcrypt from "bcryptjs";
// import User from "../model/clientModel.js";
// import generateTokenAndSetCookie from "../utils/generateToken.js";
const User = require("../model/clientModel.js");
const generateTokenAndSetCookie=require("../utils/generateToken.js");
async function register (req, res) {
	try {
		const {username, password,address,phone} = req.body;

		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

		const user = await User.findOne({ username });

		if (user) {
			return res.status(400).json({ error: "Username already exists" });
		}

		// HASH PASSWORD HERE
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			username,
			password: hashedPassword,
            address,
            phone,
        });

		if (newUser) {
			// Generate JWT token here
			generateTokenAndSetCookie(newUser._id, res);
			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				username: newUser.username,
                password:newUser.password,
                address:newUser.address,
                phone:newUser.phone
            });
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
module.exports={register}
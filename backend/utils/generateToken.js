const jwt = require('jsonwebtoken');
const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, "4a2d5f8d4d846c109a3f1eac6f8407ab5da543667b307470d4a4e7d19371b0e3", {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "Strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
	});
};

module.exports = {generateTokenAndSetCookie};
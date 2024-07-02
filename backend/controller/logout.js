 const logout = async (req, res) => {
    try {
      res.clearCookie("token");
      res.status(200).json('User has been logged out!');
      console.log("logout compleated");
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "internal server error" });
    }
  };
module.exports = { logout };
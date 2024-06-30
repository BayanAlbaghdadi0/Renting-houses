export const signOut = async (req, res, next) => {
    try {
      res.clearCookie('jwt');
      res.status(200).json('User has been logged out!');
    } catch (error) {
      next(error);
    }
  };
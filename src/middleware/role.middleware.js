// middleware/role.middleware.js

const roleMiddleware = (allowedRoles = []) => {
  return (req, res, next) => {
    try {
      // Assuming req.user is set by auth middleware after JWT verification
      const userRole = req.user.role;

      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({
          message: "Access denied. You do not have permission.",
        });
      }

      next(); // user has permission
    } catch (error) {
      return res.status(500).json({
        message: "Server error in role middleware",
        error: error.message,
      });
    }
  };
};

export default roleMiddleware;
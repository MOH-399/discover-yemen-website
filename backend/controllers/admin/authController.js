import jwt from "jsonwebtoken";

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const adminEmail = "admin@discoveryemen.com";
  const adminPassword = "admin123";

  if (email !== adminEmail || password !== adminPassword) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      role: "admin",
      email: adminEmail,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.json({
    token,
    admin: {
      email: adminEmail,
      role: "admin",
    },
  });
};
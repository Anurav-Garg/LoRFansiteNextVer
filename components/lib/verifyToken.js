import { verify } from "jsonwebtoken";

export function verifyToken(req, res) {
  if (!(req.headers.authorization || req.headers["Authorization"])) {
    res.status(403).json({ message: "Authorization token is required" });
    return;
  }

  const [bearer, token] = req.headers.authorization
    ? req.headers.authorization.split(" ")
    : req.headers["Authorization"].split(" ");

  if (!token || !bearer || bearer !== "Bearer") {
    res.status(403).json({ message: "Invalid token" });
    return;
  }
  try {
    const decoded = verify(token, process.env.TOKEN_KEY);
    return decoded;
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
    return;
  }
}

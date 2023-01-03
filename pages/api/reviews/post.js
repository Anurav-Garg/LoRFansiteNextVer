import { PrismaClient } from "@prisma/client";
import { verify } from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      // TEMP:
      // console.log(req.headers);
      // res.setHeader("yeah", "indeed!");
      // res.status(200).json();
      if (!req.headers.authorization) {
        res.status(403).json({ message: "Authorization token is required" });
      }

      const [bearer, token] = req.headers.authorization.split(" ");

      if (!token || !bearer || bearer !== "Bearer") {
        res.status(403).json({ message: "Invalid token" });
        return;
      }
      try {
        const decoded = verify(token, process.env.TOKEN_KEY);
        // TEMP:
        
        res.status(200).json();
        return;
      } catch (err) {
        res.status(403).json({ message: "Invalid token" });
        return;
      }
    } else {
      res.status(400).json({ message: "Request must be a POST request" });
      return;
    }
  } catch (err) {
    console.log(err);
  }
}

import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { username, password } = JSON.parse(req.body);

      if (!(username && password)) {
        res
          .status(400)
          .json({ message: "Both Username and Password are required" });
        return;
      }

      const existingUser = await prisma.user.findUnique({
        where: { username: username },
      });
      if (existingUser) {
        res.status(400).json({ message: "Username taken" });
        return;
      }

      const hashedPassword = await hash(password, 10);

      const user = await prisma.user.create({
        data: {
          username: username,
          password: hashedPassword,
        },
      });

      const token = sign(
        { id: user.id, username: user.username },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      res.status(201).json({ username: user.username, token: token });
    } else {
      res.status(400).json({ message: "Request must be a POST request" });
    }
  } catch (err) {
    console.log(err);
  }
}

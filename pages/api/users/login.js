import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
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
      if (!existingUser) {
        res
          .status(400)
          .json({ message: `No user found with username "${username}"` });
        return;
      }

      if (await compare(password, existingUser.password)) {
        const token = sign(
          { id: existingUser.id, username: username },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );

        res.status(200).json({ username: username, token: token });
        return;
      } else {
        res.status(400).json({ message: "Incorrect password" });
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

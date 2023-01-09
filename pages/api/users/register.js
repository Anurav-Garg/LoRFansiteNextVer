import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../prisma/client";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      res.status(400).json({ message: "Request must be a POST request" });
      return;
    }
    const { username, password } = req.body;

    if (!(username && password)) {
      res.status(400).json({
        message:
          "Both Username and Password are required, as well as Application/JSON header",
      });
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
        // id: uuidv4(),
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
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json();
  }
}

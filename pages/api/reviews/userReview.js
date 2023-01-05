import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../../../components/lib/verifyToken";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      res.status(400).json({ message: "Request must be a GET request" });
      return;
    }

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

    const decoded = verifyToken(req, res);
    if (!decoded) {
      return;
    }

    const existingReview = await prisma.review.findUnique({
      where: { authorId: decoded.id },
      select: {
        id: true,
        author: {
          select: {
            username: true,
          },
        },
        recommended: true,
        text: true,
        date: true,
        title: true,
      },
    });

    if (existingReview) {
      res.status(200).json(existingReview);
    } else {
      res.status(204).json();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json();
  }
}

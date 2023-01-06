import { verifyToken } from "../../../components/lib/verifyToken";
import prisma from "../../../prisma/prisma";

export default async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      res.status(400).json({ message: "Request must be a GET request" });
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

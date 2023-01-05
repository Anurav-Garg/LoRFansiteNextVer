import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../../../components/lib/verifyToken";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      res.status(400).json({ message: "Request must be a POST request" });
      return;
    }

    const decoded = verifyToken(req, res);
    if (!decoded) {
      return;
    }

    const existingReview = await prisma.review.findUnique({
      where: { authorId: decoded.id },
    });

    if (existingReview) {
      res.status(400).json({ message: "Review by user already exists" });
      return;
    }

    const { recommended, title, text } = req.body;
    // TEMP:
    console.log(req.body);

    if (!(recommended && title && text)) {
      res.status(400).json({ message: "All review parameters are required" });
      return;
    }

    const recommendedBool = recommended.toLowerCase() === "true";
    const review = await prisma.review.create({
      data: {
        recommended: recommendedBool,
        title: title,
        text: text,
        author: {
          connect: {
            id: decoded.id,
          },
        },
      },
    });

    res.status(201).json(review);
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json();
  }
}

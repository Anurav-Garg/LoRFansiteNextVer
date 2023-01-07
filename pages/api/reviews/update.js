import { verifyToken } from "../../../components/lib/verifyToken";
import { prisma } from "../../../prisma/client";

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

    if (!existingReview) {
      res.status(400).json({ message: "No existing review found" });
      return;
    }

    const { recommended, title, text } = req.body;

    if (!(typeof recommended === "boolean" && title && text)) {
      res.status(400).json({
        message:
          "All review parameters are required, and must be of correct type",
      });
      return;
    }

    const review = await prisma.review.update({
      where: {
        id: existingReview.id,
      },
      data: {
        recommended: recommended,
        title: title,
        text: text,
        author: {
          connect: {
            id: decoded.id,
          },
        },
      },
    });

    res.status(200).json(review);
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json();
  }
}

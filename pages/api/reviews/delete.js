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

    const deletedReview = await prisma.review.delete({
      where: { authorId: decoded.id },
    });

    res.status(200).json(deletedReview);
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json();
  }
}

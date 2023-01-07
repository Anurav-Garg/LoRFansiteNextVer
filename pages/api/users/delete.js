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

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const userReview = await prisma.review.deleteMany({
      where: { authorId: decoded.id },
    });
    const deletedUser = await prisma.user.delete({
      where: { id: decoded.id },
      select: {
        id: true,
        username: true,
      },
    });
    res.status(200).json(deletedUser);

    return;
  } catch (err) {
    console.log(err);
    res.status(500).json();
  }
}

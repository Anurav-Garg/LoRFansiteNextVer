import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const reviews = await prisma.review.findMany({
        select: {
          author: {
            select: {
              username: true,
            },
          },
          recommended: true,
          text: true,
        },
      });

      res.status(200).json(reviews);
      return;
    } else {
      res.status(400).json({ message: "Request must be a GET request" });
      return;
    }
  } catch (err) {
    console.log(err);
  }
}

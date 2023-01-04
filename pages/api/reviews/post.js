import { PrismaClient } from "@prisma/client";
import { verify } from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      // TEMP:
      // res.setHeader("yeah", "indeed!");
      // res.status(200).json();
      if (!req.headers.authorization) {
        res.status(403).json({ message: "Authorization token is required" });
      }

      const [bearer, token] = req.headers.authorization.split(" ");

      if (!token || !bearer || bearer !== "Bearer") {
        res.status(403).json({ message: "Invalid token" });
        return;
      }
      try {
        const decoded = verify(token, process.env.TOKEN_KEY);

        const existingReview = await prisma.review.findUnique({
          where: { authorId: decoded.id },
        });

        if (existingReview) {
          res.status(400).json({ message: "Review by user already exists" });
          return;
        }

        const { recommended, title, text } = JSON.parse(req.body);
        // TEMP:
        console.log(JSON.parse(req.body));

        if (!(recommended && title && text)) {
          res
            .status(400)
            .json({ message: "All review parameters are required" });
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
        res.status(403).json({ message: "Invalid token" });
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

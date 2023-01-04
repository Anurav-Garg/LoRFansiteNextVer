import { useEffect, useState } from "react";
import { PageHeading } from "../common/pageHeading";
import { Section } from "../common/section";
import { getReviews } from "../lib/getReviews";
import { Review } from "./review";

export function ReviewsContent() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews().then((reviews) => setReviews(reviews));
  }, [reviews]);

  return (
    <>
      <PageHeading heading="USER REVIEWS" />
      <Section heading="I'm sure this is a good idea">
        <div className="flex flex-col gap-4">
          {reviews.map((review) => (
            <Review
              title={review.title}
              text={review.text}
              recommended={review.recommended}
              author={review.author.username}
              date={review.date.slice(0, 10)}
              key={review.id}
            />
          ))}
        </div>
      </Section>
    </>
  );
}

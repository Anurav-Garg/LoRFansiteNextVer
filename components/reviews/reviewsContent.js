import { useEffect, useState } from "react";
import { PageHeading } from "../common/pageHeading";
import { Section } from "../common/section";
import { getReviews } from "../lib/getReviews";
import { UserReview } from "./userReview";
import { Review } from "./review";
import { isError, useQuery } from "@tanstack/react-query";

export function ReviewsContent() {
  const [reviews, setReviews] = useState([]);

  const { isLoading, error, isError, isSuccess } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => {
      return getReviews().then((reviews) => {
        setReviews(reviews);
        return reviews;
      });
    },
  });

  return (
    <>
      <PageHeading heading="USER REVIEWS" />
      <Section heading="I'm sure this is a good idea">
        <div className="text-4xl py-8">Your Review</div>
        <UserReview />
        <div className="text-4xl py-8">All Reviews</div>
        {isError && error.message}
        {isLoading && "Loading..."}
        {isSuccess && (
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
        )}
      </Section>
    </>
  );
}

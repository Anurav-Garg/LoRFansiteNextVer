export async function getReviews() {
  const reviews = await fetch(`/api/reviews/`).then(reviews => reviews.json());
  return reviews;
}

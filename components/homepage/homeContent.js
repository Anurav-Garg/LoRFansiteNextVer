import { HomeDescription } from "./homeDescription";
import { IGNReview } from "./ignReview";
import { SteamReviews } from "./steamReviews";

export function HomeContent() {
  return (
    <>
      <HomeDescription />
      <IGNReview />
      <SteamReviews />
    </>
  );
}

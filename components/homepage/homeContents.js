import { HomeDescription } from "./homeDescription";
import { IGNReview } from "./ignReview";
import { SteamReviews } from "./steamReviews";

export function HomeContents() {
  return (
    <>
      <HomeDescription />
      <IGNReview />
      <SteamReviews />
    </>
  );
}

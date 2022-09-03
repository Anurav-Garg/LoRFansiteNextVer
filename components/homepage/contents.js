import { Description } from "./description";
import { IGNReview } from "./ignReview";
import { SteamReviews } from "./steamReviews";

export function Contents() {
  return (
    <>
      <Description />
      <IGNReview />
      <SteamReviews />
    </>
  );
}

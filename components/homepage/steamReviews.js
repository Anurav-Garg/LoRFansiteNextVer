import Link from "next/link";
import Image from "next/image";
import { useWindowDimensions } from "../hooks/useWindowsDimensions";

export function SteamReviews() {
  return (
    <>
      <h2 className="text-center text-5xl font-semibold py-4">
        Real Steam Reviews
      </h2>
      <div className="flex flex-wrap justify-center">{reviewImages}</div>
    </>
  );
}

const reviews = [
  {
    link: "https://steamcommunity.com/id/frostu8/recommended/1256670/",
    image: "/assets/steamReviews/cannibalSimp.png",
    width: "369",
    height: "239",
  },
  {
    link: "https://steamcommunity.com/id/InheritorOfNiko/recommended/1256670/",
    image: "/assets/steamReviews/buttered.png",
    width: "367",
    height: "207",
  },
  {
    link: "https://steamcommunity.com/profiles/76561199122270691/recommended/1256670/",
    image: "/assets/steamReviews/counterDice.png",
    width: "333",
    height: "209",
  },
  {
    link: "https://steamcommunity.com/id/Waisy/recommended/1256670/",
    image: "/assets/steamReviews/vertical.png",
    width: "298",
    height: "168",
  },
  {
    link: "https://steamcommunity.com/id/Zephyr-Eggie/recommended/1256670/",
    image: "/assets/steamReviews/mathHoax.png",
    width: "427",
    height: "181",
  },
  {
    link: "https://steamcommunity.com/id/trollfaceawesome/recommended/1256670/",
    image: "/assets/steamReviews/reverseGamer.png",
    width: "298",
    height: "206",
  },
];

const reviewImages = reviews.map((review) => (
  <SteamReview
    link={review.link}
    image={review.image}
    height={review.height}
    width={review.width}
    key={review.link}
  />
));

function SteamReview(props) {
  const { height, width } = useWindowDimensions();

  return (
    <div className="flex-none p-2 relative">
      <Link href={props.link} target="_blank">
        <a>
          <img
            src={props.image}
            width={width * 0.9 > props.width ? props.width : width * 0.9}
            height={
              width * 0.9 > props.width
                ? props.height
                : (props.height * width * 0.9) / props.width
            }
          />
        </a>
      </Link>
    </div>
  );
}

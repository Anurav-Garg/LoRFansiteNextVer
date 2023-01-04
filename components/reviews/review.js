import { MdThumbUp } from "react-icons/md";
import { MdThumbDown } from "react-icons/md";

export function Review({ title, text, recommended, author, date }) {
  return (
    <div
      className={`bg-gradient-to-b ${
        recommended
          ? "from-blue-900/60 to-blue-900/50"
          : "from-red-800/80 to-red-900/70"
      } p-4 rounded-3xl`}
    >
      <div className="flex gap-4 items-center">
        <div>
          {recommended ? (
            <MdThumbUp size={72}></MdThumbUp>
          ) : (
            <MdThumbDown size={72}></MdThumbDown>
          )}
        </div>
        <div>
          <div className="text-base">By: {author}</div>
          <div className="text-2xl">{title}</div>
        </div>
      </div>
      <div className="text-sm pt-2">Posted: {date}</div>
      <div>{text}</div>
    </div>
  );
}

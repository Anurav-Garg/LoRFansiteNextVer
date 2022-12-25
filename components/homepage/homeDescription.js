import { useWindowDimensions } from "../hooks/useWindowsDimensions";

export function HomeDescription() {
  const { height, width } = useWindowDimensions();

  return (
    <>
      {/* Heading */}
      <h2 className="text-center text-5xl font-semibold pt-4">
        {"He Turned Himself into a Book"}
      </h2>
      <h3 className="text-center text-4xl font-semibold pb-4">
        {"Funniest Shit I've ever Seen"}
      </h3>

      {/* Description */}
      <p className="text-center text-2xl p-8">
        {
          "Invite guests into your library. Defeat them in combat to turn them into books."
        }
        <br />
        {
          "I've never been to a library before so I can only imagine that's how they work in real life."
        }
      </p>

      {/* Opening Video */}
      <div className="flex flex-col justify-center items-center">
        <iframe
          width={width > 768 ? 560 : width * 0.7}
          height={width > 768 ? 315 : Math.round((315 * width * 0.7) / 560)}
          src="https://www.youtube.com/embed/ofmYqXfjFs8"
          title="YouTube video player"
          frameBorder="0"
          allow="clipboard-write; encrypted-media; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>

      <p className="text-center text-2xl p-8">
        Oh well, at least the music is nice.
      </p>
    </>
  );
}

import Image from "next/image";

export function IGNReview() {
  return (
    <div className="flex ml-12 -mr-12">
      <div className="basis-1/12"></div>
      <div className="basis-11/12 flex items-center py-12">
        <div className="basis-3/5 bg-slate-700 rounded-lg w-3/5 -mr-16 z-10 bg-opacity-60 backdrop-blur">
          <div className="pl-2 pt-2 text-4xl -mb-4">{'"'}</div>
          <div className="mx-auto text-center p-4 italic">
            {
              "Probably in the top 5 Difficult 2D deck-building turn-based story-driven Visual Novel-styled strategy roguelite South Korean RPG Indie Card Games to come out in 2021."
            }
          </div>
          <div className="text-right pr-2 pb-2 text-4xl">{'"'}</div>
          <div className="text-right pr-2 pb-2 text-2xl -mt-4">
            {"~IGN (Impotent Gaymers' Network)"}
          </div>
        </div>
        <div className="basis-2/5">
          <Image
            src="/assets/gameplay.png"
            layout="responsive"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
}

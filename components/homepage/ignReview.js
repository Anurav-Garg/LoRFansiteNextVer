import Image from "next/image";

export function IGNReview() {
  return (
    <div className="flex md:ml-12 md:-mr-12">
      <div className="basis-1/12"></div>
      <div className="basis-11/12 flex flex-col-reverse md:flex-row items-center py-12">
        <div className="md:basis-3/5 bg-slate-700 rounded-lg md:w-3/5 -mt-20 md:mt-0 md:-mr-16 z-10 bg-opacity-60 backdrop-blur">
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
        <div className="md:basis-2/5 w-4/5">
          <img
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

import Image from "next/image";

export function IGNReview() {
  return (
    <div className="flex items-center ml-24 -mr-24 py-12">
      <div className="bg-slate-700 rounded-lg w-3/5 -mr-16 z-10 bg-opacity-60 backdrop-blur">
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
      <div className="w-2/5 relative">
        <Image
          src="/assets/gameplay.png"
          layout="responsive"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}

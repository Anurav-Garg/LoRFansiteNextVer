import Image from "next/image";
import { protagInfo } from "./protagInfo";

export function ProtagDescriptions() {
  return (
    <>
      <h2 className="text-4xl text-yellow-400 pb-4 pt-12">
        Meet the Protagonists
      </h2>
      {protags}
    </>
  );
}

const protags = protagInfo.map((protag, index) => {
  function Heading() {
    return !(index % 2) ? (
      <h3 className="text-3xl py-4">{protag.name}</h3>
    ) : (
      <h3 className="text-3xl py-4 mt-8 -mb-8">{protag.name}</h3>
    );
  }

  function ProtagPic() {
    return (
      <div className="px-16">
        <Image src={protag.image} width={208} height={208} layout="fixed" />
      </div>
    );
  }

  function Description() {
    return !(index % 2) ? (
      <div className="pr-16 self-center">
        <p className="pb-4">{protag.description1}</p>
        <p>{protag.description2}</p>
      </div>
    ) : (
      <div className="pl-16 self-center">
        <p className="pb-4">{protag.description1}</p>
        <p>{protag.description2}</p>
      </div>
    );
  }
  return (
    <>
      <Heading />
      <div className="flex pb-4">
        {!(index % 2) ? (
          <>
            <ProtagPic />
            <Description />
          </>
        ) : (
          <>
            <Description />
            <ProtagPic />
          </>
        )}
      </div>
    </>
  );
});

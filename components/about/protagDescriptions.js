import Image from "next/image";
import { Section } from "../common/section";
import { protagInfo } from "./protagInfo";

export function ProtagDescriptions() {
  return <Section heading="Meet the Protagonists">{protags}</Section>;
}

const protags = protagInfo.map((protag, index) => {
  function Heading() {
    return !(index % 2) ? (
      <h3 className="text-3xl py-4">{protag.name}</h3>
    ) : (
      <h3 className="text-3xl py-4 md:mt-8 md:-mb-8">{protag.name}</h3>
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
      <div className="md:pr-16 self-center">
        <p className="pb-4">{protag.description1}</p>
        <p>{protag.description2}</p>
      </div>
    ) : (
      <div className="md:pl-16 self-center">
        <p className="pb-4">{protag.description1}</p>
        <p>{protag.description2}</p>
      </div>
    );
  }
  return (
    <div key={protag.name}>
      <Heading />
      <div
        className={`flex flex-col ${
          index % 2 ? "md:flex-row-reverse" : "md:flex-row"
        } pb-4`}
      >
        <>
          <ProtagPic />
          <Description />
        </>
      </div>
    </div>
  );
});

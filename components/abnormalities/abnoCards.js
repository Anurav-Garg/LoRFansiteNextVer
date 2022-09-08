import { AbnoCardLeft, AbnoCardRight } from "./abnoCard";
import { abnormalities } from "./abnormalityList";
import { AbnoHoverHandler } from "./abnoHoverHandler";

export function AbnoCards() {
  return (
    <div
      className="flex flex-col mt-16"
      id="abnormalities"
      onMouseOver={AbnoHoverHandler}
    >
      {abnoCards}
      <div id="end-space" className="py-[74px]"></div>
    </div>
  );
}

for (let abno of abnormalities) {
  abno.pointers = abno.pointersText.map((pointerText, index) => {
    return (
      <span key={"pointer" + index}>
        {"-" + pointerText} <br />
      </span>
    );
  });

  abno.desc = abno.descText.map((desc, index) => {
    return (
      <span key={"desc" + index}>
        {desc} <br />
      </span>
    );
  });
}

const abnoCards = abnormalities.map((abnormality, index) => {
  if (index % 2) {
    return <AbnoCardRight abnormality={abnormality} key={abnormality.name} />;
  }
  return <AbnoCardLeft abnormality={abnormality} key={abnormality.name} />;
});

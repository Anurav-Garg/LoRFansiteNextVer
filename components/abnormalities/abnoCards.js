import { AbnoCardLeft, AbnoCardRight } from "./abnoCard";
import { abnormalities } from "./abnormalityList";

export function AbnoCards() {
  return <>{abnoCards}</>;
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

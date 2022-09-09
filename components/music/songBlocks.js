import { songDetails } from "./songDetails";
import { SongBlock } from "./songBlock";
import { useState } from "react";

export function SongBlocks(props) {
  const [playing, setPlaying] = useState("");

  const songBlockElementsWithHandler = songDetails.map((boss) => (
    <SongBlock
      boss={boss}
      key={boss.name}
      setOuterBackground={props.setOuterBackground}
      setInnerBackground={props.setInnerBackground}
      setPlaying={setPlaying}
      playing={playing}
    />
  ));

  return <>{songBlockElementsWithHandler}</>;
}

import { songStyle } from "./songStyle";

export function PauseHandler(
  event,
  setOuterBackground,
  setInnerBackground,
  setPlaying,
  playing
) {
  setInnerBackground("bg-gray-800");

  setPlaying("");
  return;
}

export function PlayHandler(
  event,
  setOuterBackground,
  setInnerBackground,
  setPlaying,
  playing
) {
  if (playing) {
    document.getElementById(playing).pause();
  }

  setTimeout(() => {
    PlayingStyler(event.target.getAttribute("id"));
  });

  return;

  function PlayingStyler(bossName) {
    setOuterBackground(songStyle[bossName].background);

    setInnerBackground("bg-black/50");

    setPlaying(bossName);
  }
}

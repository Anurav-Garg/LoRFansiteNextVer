import { songBackgrounds } from "./songBackgrounds";

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
    setOuterBackground(songBackgrounds[bossName]);

    setInnerBackground("bg-gray-800/0");

    setPlaying(bossName);
  }
}

import { abnormalities } from "./abnormalityList";

export function AbnoHoverHandler(
  event,
  setOuterBackground,
  setInnerBackground
) {
  if (event.target.closest("#abnormalities")) {
    for (let abnormality of abnormalities) {
      if (
        event.target.closest("#" + abnormality.name + "pic") ||
        event.target.closest("#" + abnormality.name + "desc")
      ) {
        // `${abnormality.bg} ${abnormality.brightness} bg-fixed bg-top bg-cover min-h-screen min-w-screen -z-10`
        setOuterBackground(abnormality.bg);
        setInnerBackground(abnormality.dullness);
        document.getElementById("end-space").classList.add("hidden");

        return;
      }
    }
  }

  setInnerBackground("bg-gray-800");
  document.getElementById("end-space").classList.remove("hidden");

  return;
}

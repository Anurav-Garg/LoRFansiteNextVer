import { abnormalities } from "./abnormalityList";

export function AbnoHoverHandler(event) {
  const bgImage = document.getElementById("bg-image");

  
  if (event.target.closest("#abnormalities")) {
    for (let abnormality of abnormalities) {
      if (
        event.target.closest("#" + abnormality.name + "pic") ||
        event.target.closest("#" + abnormality.name + "desc")
      ) {
        bgImage.setAttribute(
          "class",
          `${abnormality.bg} bg-fixed bg-top bg-cover min-h-screen min-w-screen -z-10`
          // `${abnormality.bg} ${abnormality.brightness} bg-fixed bg-top bg-cover min-h-screen min-w-screen -z-10`
        );
        bgImage.firstElementChild.setAttribute(
          "class",
          `${abnormality.dullness} transition-all duration-500 min-h-screen min-w-screen ease-in-out`
        );
        document.getElementById("end-space").classList.add("hidden");

        return;
      }
    }
  }

  bgImage.firstElementChild.setAttribute(
    "class",
    "bg-gray-800 transition-all duration-500 min-h-screen min-w-screen ease-in-out"
  );
  document.getElementById("end-space").classList.remove("hidden");

  return;
}

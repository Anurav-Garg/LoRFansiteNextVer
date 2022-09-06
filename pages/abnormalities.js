import Head from "next/head";
import { Topbar } from "../components/topbar";
import { AbnormalitiesDescription } from "../components/abnormalities/description";
import { AbnoCards } from "../components/abnormalities/abnoCards";
import { AbnoHoverHandler } from "../components/abnormalities/abnoHoverHandler";
import { useEffect } from "react";

export default function Abnormalities() {
  useEffect(() => {
    document.body.classList.add("bg-gray-800");
    document.body.classList.remove("bg-[url(/assets/homepage.png)]");
  });

  return (
    <>
      <Head>
        <title>Cosmic Horrors!</title>
      </Head>

      <div
        className="bg-[url('/assets/backgrounds/abnormalities/blueStar.png')] bg-fixed bg-top bg-cover min-h-screen min-w-screen -z-10 backdrop-brightness-0"
        id="bg-image"
        onMouseOver={AbnoHoverHandler}
      >
        <div className="bg-gray-800 transition-all duration-500 min-h-screen min-w-screen ease-in-out">
          <Topbar />

          <div className="z-0 text-slate-300 text-xl max-w-6xl mx-auto py-8">
            <AbnormalitiesDescription />
            <div
              className="flex flex-col mt-16"
              id="abnormalities"
              onMouseOver={AbnoHoverHandler}
            >
              <AbnoCards />
              <div id="end-space" className="py-[74px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

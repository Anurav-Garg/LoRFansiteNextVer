import Head from "next/head";
import { Topbar } from "../components/topbar";
import { GameDescription } from "../components/about/gameDescription";
import { ProtagDescriptions } from "../components/about/protagDescriptions";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.body.classList.add("bg-gray-800");
    document.body.classList.remove("bg-[url(/assets/homepage.png)]");
  });

  return (
    <>
      <Head>
        <title>About LoR</title>
      </Head>
      <Topbar />

      <div className="z-0 text-slate-300 text-xl max-w-6xl mx-auto py-8">
        <GameDescription />
        <ProtagDescriptions />
      </div>
    </>
  );
}

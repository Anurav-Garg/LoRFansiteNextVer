import Link from "next/link";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

const pagesNames = ["about", "abnormalities", "music", "survey"];
const pages = pagesNames.map((page) => <PageLink page={page} key={page} />);

export function Topbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="top-0 sticky z-20 group">
      <div className=" top-0 left-0 right-0 transition-all duration-500 ease-in-out backdrop-blur-md bg-slate-900/60 group-focus-within:bg-slate-900/80 md:hover:bg-slate-900/80">
        <div className="max-w-[1440px] mx-auto flex flex-nowrap flex-none items-center px-4 py-2 peer">
          <div className="p-1">
            <Link href="/">
              <a className="hover:brightness-125 transition-all duration-200 ease-in-out">
                <Image
                  src="/assets/logo.png"
                  width={128}
                  height={64}
                  layout={"fixed"}
                />
              </a>
            </Link>
          </div>
          <div className="grow"></div>
          <button
            className="text-yellow-400 md:hidden"
            onClick={() => {
              if (menuActive) {
                document.activeElement?.blur();
                setMenuVisible(false);
                setMenuActive(true);
                setTimeout(() => {
                  setMenuActive(false);
                }, 300);
              } else {
                setMenuActive(true);
                setMenuVisible(false);
                setTimeout(() => {
                  setMenuVisible(true);
                }, 0);
              }
            }}
          >
            <MdOutlineMenu size={"32"} />
          </button>
          <div className="relative p-1 right-0 flex-row text-yellow-400 hidden md:flex">
            {pages}
            <div className="py-1 pl-3 pr-1 text-slate-100">
              <Link href="https://store.steampowered.com/app/1256670/Library_Of_Ruina/">
                <a
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-green-700 hover:bg-green-500 after:content-['_↗'] transition-colors duration-300 ease-in-out whitespace-nowrap"
                >
                  Steam Page
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`absolute p-1 right-0 text-yellow-400 flex-col backdrop-blur-md float-right bg-slate-900/60 group-focus-within:bg-slate-900/80 gap-4 py-4 transition-all duration-500 ease-in-out ${
            menuActive ? "flex" : "hidden"
          } ${menuVisible ? "opacity-100" : "opacity-0"}`}
        >
          {pages}
          <div className="py-1 pl-3 pr-1 text-slate-100">
            <Link href="https://store.steampowered.com/app/1256670/Library_Of_Ruina/">
              <a
                target="_blank"
                className="px-4 py-2 rounded-xl bg-green-700 hover:bg-green-500 after:content-['_↗'] transition-colors duration-300 ease-in-out whitespace-nowrap"
              >
                Steam Page
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageLink(props) {
  const page = String(props.page);
  const pageName = page[0].toUpperCase() + page.slice(1);

  return (
    <div className="p-1">
      <Link href={"/" + page}>
        <a className="px-4 py-2 hover:underline">{pageName}</a>
      </Link>
    </div>
  );
}

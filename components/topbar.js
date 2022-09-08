import Link from "next/link";
import Image from "next/image";

const pagesNames = ["about", "abnormalities", "music", "survey"];
const pages = pagesNames.map((page) => <PageLink page={page} key={page} />);

export function Topbar() {
  return (
    <div className="sticky top-0 left-0 right-0 backdrop-blur-md z-20 bg-slate-900/60 hover:bg-slate-900/80">
      <div className="max-w-[1440px] mx-auto flex flex-nowrap items-center px-4 py-2">
        <div className="p-1">
          <Link href="/">
            <a>
              <Image src="/assets/logo.png" width={128} height={64} />
            </a>
          </Link>
        </div>
        <div className="grow"></div>
        <div className="relative p-1 right-0 flex flex-row text-yellow-400">
          {pages}
          <div className="py-1 pl-3 pr-1 text-slate-100">
            <Link href="https://store.steampowered.com/app/1256670/Library_Of_Ruina/">
              <a
                target="_blank"
                className="px-4 py-2 rounded-xl bg-green-700 hover:bg-green-500 after:content-['_↗']"
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
        <a className="px-4 py-2">{pageName}</a>
      </Link>
    </div>
  );
}

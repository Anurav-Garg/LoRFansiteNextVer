import Link from "next/link";
import Image from "next/image";
import { useWindowDimensions } from "../hooks/useWindowsDimensions";

export function AbnoCardLeft(props) {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <div className="relative z-0" id={props.abnormality.name}>
        <div id={props.abnormality.name + "pic"} className="peer">
          <Link href={props.abnormality.link}>
            <a target="_blank" className="hidden md:block">
              <div className="relative float-left">
                <Image
                  src={`/assets/abnoCards/${props.abnormality.name}.png`}
                  width={2220 / 3.5}
                  height={840 / 3.5}
                />
              </div>
            </a>
          </Link>
          <div className="relative float-left md:hidden">
            <Image
              src={`/assets/abnoCards/${props.abnormality.name}.png`}
              width={2220 / 3.5}
              height={840 / 3.5}
            />
          </div>
        </div>
        <div
          className={`bg-gradient-to-b ${props.abnormality.grad1} ${props.abnormality.grad2} max-w-2xl -mt-[4rem] sm:-mt-[5.5rem] md:-mt-[7.5rem] md:ml-[14.8rem] -z-10 relative rounded-xl hidden peer-hover:block hover:block float-left backdrop-blur`}
          id={props.abnormality.name + "desc"}
        >
          <p className="px-8 pt-16 md:pt-16 sm:pt-24">
            {props.abnormality.pointers}
          </p>
          <p className="p-8">{props.abnormality.desc}</p>
        </div>
      </div>
    </>
  );
}

export function AbnoCardRight(props) {
  return (
    <>
      <div className="relative z-0 self-end" id={props.abnormality.name}>
        <div id={props.abnormality.name + "pic"} className="peer">
          <Link href={props.abnormality.link}>
            <a target="_blank" className="hidden md:block">
              <div className="relative float-right">
                <Image
                  src={`/assets/abnoCards/${props.abnormality.name}.png`}
                  width={2220 / 3.5}
                  height={840 / 3.5}
                />
              </div>
            </a>
          </Link>
          <div className="relative float-right">
            <Image
              src={`/assets/abnoCards/${props.abnormality.name}.png`}
              width={2220 / 3.5}
              height={840 / 3.5}
            />
          </div>
        </div>
        <div
          className={`bg-gradient-to-b ${props.abnormality.grad1} ${props.abnormality.grad2} max-w-2xl -mt-[4rem] sm:-mt-[5.5rem] md:-mt-[7.5rem] md:mr-[14.8rem] -z-10 relative rounded-xl hidden peer-hover:block hover:block float-right backdrop-blur`}
          id={props.abnormality.name + "desc"}
        >
          <div className={props.abnormality.text}>
            <p className="px-8 pt-16">{props.abnormality.pointers}</p>
            <p className="p-8">{props.abnormality.desc}</p>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

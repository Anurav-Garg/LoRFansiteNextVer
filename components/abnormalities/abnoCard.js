import Link from "next/link";
import Image from "next/image";

export function AbnoCardLeft(props) {
  return (
    <>
      <div className="relative z-0 w-max" id={props.abnormality.name}>
        <Link href={props.abnormality.link}>
          <a
            target="_blank"
            className="peer"
            id={props.abnormality.name + "pic"}
          >
            <div className="h-60 relative">
              <Image
                src={`/assets/abnoCards/${props.abnormality.name}.png`}
                width={2220 / 3.5}
                height={840 / 3.5}
              />
            </div>
          </a>
        </Link>
        <div
          className={`bg-gradient-to-b ${props.abnormality.grad1} ${props.abnormality.grad2} max-w-2xl -mt-[7.5rem] ml-[14.8rem] -z-10 relative rounded-xl hidden peer-hover:block hover:block backdrop-blur`}
          id={props.abnormality.name + "desc"}
        >
          <p className="px-8 pt-16">{props.abnormality.pointers}</p>
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
        <Link href={props.abnormality.link}>
          <a
            target="_blank"
            className="peer"
            id={props.abnormality.name + "pic"}
          >
            <div className="h-60 relative float-right">
              <Image
                src={`/assets/abnoCards/${props.abnormality.name}.png`}
                width={2220 / 3.5}
                height={840 / 3.5}
              />
            </div>
          </a>
        </Link>
        <div
          className={`bg-gradient-to-b ${props.abnormality.grad1} ${props.abnormality.grad2} max-w-2xl -mt-[7.5rem] mr-[14.8rem] -z-10 relative rounded-xl hidden peer-hover:block hover:block float-right backdrop-blur`}
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

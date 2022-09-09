import Link from "next/link";
import Image from "next/image";
import { PlayHandler, PauseHandler } from "./songHandlers";

export function BossAudio(props) {
  return (
    <>
      <audio
        src={`/assets/audio/${props.songName}.mp3`}
        preload="auto"
        controls
        loop
        className="my-4"
        id={props.songName}
        onPlay={(event) =>
          PlayHandler(
            event,
            props.setOuterBackground,
            props.setInnerBackground,
            props.setPlaying,
            props.playing
          )
        }
        onPause={(event) =>
          PauseHandler(
            event,
            props.setOuterBackground,
            props.setInnerBackground,
            props.setPlaying,
            props.playing
          )
        }
      ></audio>
    </>
  );
}

export function BossIcon(props) {
  return (
    <Link href={props.link}>
      <a className="flex-none" target={"_blank"}>
        <Image
          src={`/assets/bossIcons/${props.imageName}.png`}
          width={208}
          height={208}
          layout={"fixed"}
        />
      </a>
    </Link>
  );
}

export function BossDetails(props) {
  return (
    <div className="pl-4 self-center flex flex-col">
      <div className="flex justify-center text-2xl">
        <p className="px-12">
          <strong>Song Name</strong>: {props.boss.song}
        </p>
        <p className="px-12">
          <strong>Genre</strong>: {props.boss.genre}
        </p>
      </div>
      {props.boss.descIsImage ? (
        <div className="py-4 self-center justify-center">
          <Image
            src={props.boss.desc}
            height={140}
            width={140}
            layout={"fixed"}
          />
        </div>
      ) : (
        <div className="py-4">{props.boss.desc}</div>
      )}
      <div>Fun fact: {props.boss.fact}</div>
    </div>
  );
}

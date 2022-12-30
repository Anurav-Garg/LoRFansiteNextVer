import { BossDetails, BossIcon, BossAudio } from "./bossComponents";

export function SongBlock(props) {
  return (
    <div className="py-8">
      <h3
        className={`font-bold text-3xl py-2 transition-colors duration-500 ease-in-out ${
          props.playing === props.boss.name ? props.boss.titleStyle : ""
        }`}
        id={`${props.boss.name}title`}
      >
        {props.boss.title}
      </h3>

      <BossAudio
        songName={props.boss.name}
        setOuterBackground={props.setOuterBackground}
        setInnerBackground={props.setInnerBackground}
        setPlaying={props.setPlaying}
        playing={props.playing}
        colour={props.boss.playerStyle}
      />

      <div
        className={`flex flex-col md:flex-row p-2 ${props.boss.bg} rounded-lg ${
          props.playing === props.boss.name
            ? "bg-opacity-40 backdrop-blur"
            : "bg-opacity-0 border-opacity-0"
        } ${
          props.boss.border
        } border-2  transition-all duration-500 ease-in-out`}
        id={`${props.boss.name}desc`}
      >
        <BossIcon link={props.boss.link} imageName={props.boss.name} />

        <BossDetails boss={props.boss} />
      </div>
    </div>
  );
}

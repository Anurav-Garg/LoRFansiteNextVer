import { BossDetails, BossIcon, BossAudio } from "./bossComponents";

export function SongBlock(props) {
  return (
    <div className="py-8">
      <h3 className={`font-bold text-3xl py-2`} id={`${props.boss.name}title`}>
        {props.boss.title}
      </h3>

      <BossAudio
        songName={props.boss.name}
        setOuterBackground={props.setOuterBackground}
        setInnerBackground={props.setInnerBackground}
        setPlaying={props.setPlaying}
        playing={props.playing}
      />

      <div
        className={`flex p-2 ${props.boss.bg} rounded-lg bg-opacity-0 ${props.boss.border} border-2 border-opacity-0 transition-all duration-500 ease-in-out`}
        id={`${props.boss.name}desc`}
      >
        <BossIcon link={props.boss.link} imageName={props.boss.name} />

        <BossDetails boss={props.boss} />
      </div>
    </div>
  );
}

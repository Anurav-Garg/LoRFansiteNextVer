import Image from "next/image";

export function SurveyNo() {
  return (
    <>
      <div className="flex">
        <div className="py-4 basis-3/4">
          {
            "Don't care + didn't ask + L + Ratio + soyjak + beta + cringe + stfu + cope + seethe + ok boomer + incel + virgin + Karen + ๐คก๐คก๐คก + you are not just a clown, you are the entire circus + ๐๐๐ + nah this ain't it + do better + check your privilege + pronouns in bio + anime pfp + ๐คข๐คข๐คฎ๐คฎ + the cognitive dissonance is real with this one + small dick energy + ๐๐๐คฃ๐คฃ + lol copium + snowflake + ๐ฉ๐ฉ๐ฉ + those tears taste delicious + Lisa Simpson meme template saying that your opinion is wrong + ๐๐๐ง๐คจ + wojak meme in which I'm the chad + average your opinion fan vs average my opinion enjoyer + random k-pop fancam + cry more + how's your wife's boyfriend doing + Cheetos breath + Intelligence 0 + r/whooooosh + r/downvotedtooblivion + blocked and reported + yo Momma so fat + I fucked your mom last night + what zero pussy does to a mf + Jesse what the fuck are you talking about + holy shit go touch some grass + cry about it + get triggered"
          }
        </div>
        <div className="basis-1/4 pl-16">
          <Image
            src="/assets/surveyResults/rolandCringe.png"
            layout="responsive"
            alt=""
            width="240"
            height="350"
          />
          <div className="text-sm">
            {"Fig 7.3: Roland, cringing at you for being sane"}
          </div>
        </div>
      </div>
    </>
  );
}

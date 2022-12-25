import { PageHeading } from "../common/pageHeading";
import { Section } from "../common/section";

export function SurveyDescription() {
  return (
    <>
      <PageHeading heading="SURVEY" />
      <Section heading="Should you play Library of Ruina?">
        <div id="contents">
          <div className="py-4">
            <div>
              {
                "Such is the nature of existential questions we ask ourselves everyday."
              }
            </div>
            <div>
              {
                "Luckily for you, we have created a neat little survey that can help you make this very important decision!"
              }
            </div>
            <div>
              {
                'Just go through the questions given below, and select "YES" only if your answer to every single question is Yes, and "NO" otherwise. '
              }
            </div>
          </div>
          <ul className="list-disc py-4 text-lg">
            <li>
              {
                "Do you like strategy games that make you think for ages before every move?"
              }
            </li>
            <li>
              {"Really hard games that require several attempts per level?"}
            </li>
            <li>
              {
                "Really long games that take over 100 hours to beat, with levels that last more than 90 minutes?"
              }
            </li>
            <li>
              {
                "Games with Gacha type mechanics where there's only a small chance you'll get what you need after beating a level, except there's no in-app payments so the only option if you fail is to replay the level?"
              }
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}

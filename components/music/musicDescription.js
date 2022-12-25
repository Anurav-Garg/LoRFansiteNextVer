import { Section } from "../common/section";
import { PageHeading } from "../common/pageHeading";

export function MusicDescription() {
  return (
    <>
      <PageHeading heading="THE OST" />
      <Section heading="Sick-Ass Beats to Beat Sick Asses to">
        <div id="contents">
          <p className="py-4">
            The music is basically the only reason I know this game exists. You
            <strong> will </strong> listen to it, and you
            <strong className="font-extrabold"> will </strong> enjoy it.
            Consider this a threat.
          </p>
          <p className="py-4">
            {
              "Library of Ruina features several (five (5(५))) lyrical lore-appropriate boss battle themes, each of which depict the boss' backstory (usually losing a loved one and being generally unhappy about it) and emotions (basically always sorrow) in its own unique way. Great for drowning out the unceasing voices!"
            }
          </p>
          <p className="py-4">
            {
              "And this is not even counting the various instrumental themes for the rest of the battles! The system that decides which instrumental theme plays at what time is so fucked up it took me several of hours of gameplay to understand."
            }
          </p>
          <p>{"...anyway here are the boss battle songs:"}</p>
        </div>
      </Section>
    </>
  );
}

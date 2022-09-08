import { PageHeading } from "../common/pageHeading";
import { Section } from "../common/section";

export function GameDescription() {
  return (
    <>
      <PageHeading heading="ABOUT" />
      <Section heading="What is Library of Ruina?">
        <p className="py-4">
          {`Library of Ruining-100-hours-of-my-life is an indie card game by
          Korean studio Project Moon about reading the tutorial manual thrice in
          one turn only to then use the worst combination of cards
          mathematically possible, broken up by visual novel style sequences
          that are fully voiced in Korean, which is amazing considering how the
          dialogue sometimes drags on longer than the battles.`}
        </p>

        <p className="py-4">
          {`As you can expect from any studio based in an East Asian country, the
          game is very `}
          {<em>upbeat</em>} and {<em>optimistic</em>}
          {`, taking place
          in a totally hypothetical and fictional dystopian world where
          corporations are also the government and control the lives of the
          people, and the divide between the rich and the poor is wider than the
          average reddit moderator. The story starts off nice and relatable with
          some good ol' ✨Organ Harvesting✨ so the game is at least forthcoming
          about its theming.`}
        </p>

        <p className="py-4">
          {`The objective of the game is to kill off guests who enter your library
          to read books (isn't this bad for business?) and then wave their
          corpse around to bait in new stronger guests. Apparently this is all
          in order to obtain one final perfect book or something but I'm pretty
          sure that's just Angela being off her meds.`}
        </p>

        <p className="py-4">
          {`Library of Ruina is actually the sequel to another game by the same
          studio, called Lobotomy Corporation. However, I didn't beat that game
          because though I may be a degenerate masochist, dear reader, I am not
          masochistic enough for the devilspawn that is Lobotomy Corporation
          (also you don't need to beat it to follow along with LoR's story).`}
        </p>
      </Section>
    </>
  );
}

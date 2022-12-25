import { PageHeading } from "../common/pageHeading";
import { Section } from "../common/section";

export function AbnormalitiesDescription() {
  return (
    <>
      <PageHeading heading="MEET THE ABNORMALITIES" />

      <Section heading="Your friendly neighbourhood eldritch horrors beyond human comprehension!">
        <p className="py-4">
          Abnormalities are the horrific sanity ending murder machines you need
          to defeat to harness their power in order to obtain more books. You
          know, once again like real life libraries.
        </p>
        <p className="py-4">
          {
            "To help you get started, we've provided a little introduction to some of these mistakes of God. Happy reading!"
          }
        </p>
      </Section>
    </>
  );
}

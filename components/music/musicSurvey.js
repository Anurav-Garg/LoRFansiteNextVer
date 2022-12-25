import { Section } from "../common/section";
import { useState } from "react";
import { MusicForm } from "./musicForm";

export function MusicSurvey() {
  const [formSubmission, setFormSubmission] = useState("");

  const SelectionHandler = (value) => {
    setSelection(value);
  };

  const SubmissionHandler = function () {
    setFormSubmission(selection);
  };

  const [selection, setSelection] = useState("yes");

  if (formSubmission === "") {
    return (
      <Section heading="Your Thoughts: Survey">
        <div>{`It goes without saying really but I'm sure by now you're too
  convinced that Library of Ruina has the greatest OST ever conceived.
  To be sure, though, we are hosting a survey, and would like you to
  fill in the form below as truthfully as possible! 😇`}</div>

        <MusicForm
          selection={selection}
          selectionHandler={SelectionHandler}
          submissionHandler={SubmissionHandler}
        />
      </Section>
    );
  }

  return (
    <Section heading="Your Thoughts: Survey">
      {formSubmission === "yes" ? (
        <div>{"+50 Social Credit"}</div>
      ) : (
        <div className="pb-96">
          {
            "Thank you for your feedback! We will get back to you at your physical location in 3-5 business days 😇"
          }
        </div>
      )}
    </Section>
  );
}

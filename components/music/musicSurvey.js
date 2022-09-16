import { Section } from "../common/section";
import { useState } from "react";
import { MusicForm } from "./musicForm";

export function MusicSurvey() {
  const SubmissionHandler = function () {
    if (selection === "yes") {
      setContents(() => <div>{"+50 Social Credit"}</div>);
    } else {
      setContents(() => (
        <div>
          {
            "Thank you for your feedback! We will get back to you at your physical location in 3-5 business days 😇"
          }
        </div>
      ));
    }
  };

  const [selection, setSelection] = useState("no");

  const SelectionHandler = (value) => {
    // console.log(value);
    setSelection(value);
  };

  const [Contents, setContents] = useState(() => {
    return (
      <>
        <div>{`It goes without saying really but I'm sure by now you're too
      convinced that Library of Ruina has the greatest OST ever conceived.
      To be sure, though, we are hosting a survey, and would like you to
      fill in the form below as truthfully as possible! 😇`}</div>

        <MusicForm
          selection={selection}
          selectionHandler={SelectionHandler}
          submissionHandler={SubmissionHandler}
        />
      </>
    );
  });

  return <Section heading="Your Thoughts: Survey">{Contents}</Section>;
}

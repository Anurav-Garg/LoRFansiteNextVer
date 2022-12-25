import { SurveyDescription } from "./surveyDescription";
import { SurveyForm } from "./surveyForm";
import { useState } from "react";
import { SurveyNo } from "./surveyNo";
import { PageHeading } from "../common/pageHeading";
import { Section } from "../common/section";
import { SurveyYes } from "./surveyYes";

export function SurveyContent() {
  const [selection, setSelection] = useState("yes");
  const [formSubmission, setFormSubmission] = useState("");

  if (formSubmission === "") {
    return (
      <>
        <SurveyDescription />
        <SurveyForm
          selection={selection}
          setSelection={setSelection}
          setFormSubmission={setFormSubmission}
        />
      </>
    );
  } else {
    return (
      <>
        <PageHeading heading="SURVEY" />
        <Section heading="Your Results">
          {formSubmission === "no" ? <SurveyNo /> : <SurveyYes />}
        </Section>
      </>
    );
  }
}

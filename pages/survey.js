import Head from "next/head";
import { ContentContainer } from "../components/common/contentContainer";
import { Topbar } from "../components/topbar";
import { PageContainer } from "../components/common/pageContainer";
import { SurveyContent } from "../components/survey/surveyContent";

export default function Survey() {
  return (
    <>
      <Head>
        <title>Masochism Evaluation</title>
      </Head>
      <PageContainer>
        <SurveyContents />
      </PageContainer>
    </>
  );
}

function SurveyContents(props) {
  return (
    <>
      <Topbar />
      <ContentContainer>
        <SurveyContent />
      </ContentContainer>
    </>
  );
}

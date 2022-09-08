import Head from "next/head";
import { Topbar } from "../components/topbar";
import { GameDescription } from "../components/about/gameDescription";
import { ProtagDescriptions } from "../components/about/protagDescriptions";
import { ContentContainer } from "../components/common/contentContainer";
import { PageContainer } from "../components/common/pageContainer";

export default function About() {
  return (
    <>
      <Head>
        <title>About LoR</title>
      </Head>

      <PageContainer handlers={{}}>
        <Topbar />
        <ContentContainer>
          <GameDescription />
          <ProtagDescriptions />
        </ContentContainer>
      </PageContainer>
    </>
  );
}

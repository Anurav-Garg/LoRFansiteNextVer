import Head from "next/head";
import { Topbar } from "../components/topbar";
import { AbnormalitiesDescription } from "../components/abnormalities/abnormalitiesDescription";
import { AbnoCards } from "../components/abnormalities/abnoCards";
import { AbnoHoverHandler } from "../components/abnormalities/abnoHoverHandler";
import { ContentContainer } from "../components/common/contentContainer";
import { PageContainer } from "../components/common/pageContainer";

export default function Abnormalities() {
  return (
    <>
      <Head>
        <title>Cosmic Horrors!</title>
      </Head>

      <PageContainer
        outerBackground="bg-[url('/assets/backgrounds/abnormalities/blueStar.png')]"
        handlers={{ onMouseOver: AbnoHoverHandler }}
      >
        <Topbar />
        <ContentContainer>
          <AbnormalitiesDescription />
          <AbnoCards />
        </ContentContainer>
      </PageContainer>
    </>
  );
}

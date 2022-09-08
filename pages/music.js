import Head from "next/head";
import { Topbar } from "../components/topbar";
import { MusicDescription } from "../components/music/musicDescription";
import { PageContainer } from "../components/common/pageContainer";
import { ContentContainer } from "../components/common/contentContainer";

export default function Music() {
  return (
    <>
      <Head>
        <title>Violence and Violins</title>
      </Head>

      <PageContainer handlers={{}}>
        <Topbar />
        <ContentContainer>
          <MusicDescription></MusicDescription>
        </ContentContainer>
      </PageContainer>
    </>
  );
}

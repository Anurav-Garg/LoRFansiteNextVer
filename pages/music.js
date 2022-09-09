import Head from "next/head";
import { Topbar } from "../components/topbar";
import { MusicDescription } from "../components/music/musicDescription";
import { PageContainer } from "../components/common/pageContainer";
import { ContentContainer } from "../components/common/contentContainer";
import { SongBlocks } from "../components/music/songBlocks";

export default function Music() {
  return (
    <>
      <Head>
        <title>Violence and Violins</title>
      </Head>
      <script src="../components/music/songHandlers.js" />
      <PageContainer>
        <MusicContents />
      </PageContainer>
    </>
  );
}

function MusicContents(props) {
  return (
    <>
      <Topbar />
      <ContentContainer>
        <MusicDescription />
        <SongBlocks
          setOuterBackground={props.setOuterBackground}
          setInnerBackground={props.setInnerBackground}
        />
      </ContentContainer>
    </>
  );
}

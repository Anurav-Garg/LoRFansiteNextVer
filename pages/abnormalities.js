import Head from "next/head";
import { AbnoHoverHandler } from "../components/abnormalities/abnoHoverHandler";
import { PageContainer } from "../components/common/pageContainer";
import { AbnoCards } from "../components/abnormalities/abnoCards";
import { Topbar } from "../components/topbar";
import { ContentContainer } from "../components/common/contentContainer";
import { AbnormalitiesDescription } from "../components/abnormalities/abnormalitiesDescription";

export default function Abnormalities() {
  return (
    <>
      <Head>
        <title>Cosmic Horrors!</title>
      </Head>

      <PageContainer outerBackground="bg-[url('/assets/backgrounds/abnormalities/blueStar.png')]">
        <AbnoContents HoverHandler={AbnoHoverHandler}></AbnoContents>
      </PageContainer>
    </>
  );
}

function AbnoContents(props) {
  return (
    <div
      onMouseOver={(event) =>
        props.HoverHandler(
          event,
          props.setOuterBackground,
          props.setInnerBackground
        )
      }
    >
      <Topbar />
      <ContentContainer>
        <AbnormalitiesDescription />
        <AbnoCards
          setOuterBackground={props.setOuterBackground}
          setInnerBackground={props.setInnerBackground}
        />
      </ContentContainer>
    </div>
  );
}

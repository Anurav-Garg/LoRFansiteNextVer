import { Topbar } from "../topbar";
import { AbnormalitiesDescription } from "./abnormalitiesDescription";
import { AbnoCards } from "./abnoCards";
import { ContentContainer } from "../common/contentContainer";

export function HoverDetector(props) {
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

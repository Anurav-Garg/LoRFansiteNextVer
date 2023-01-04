import Head from "next/head";
import { ContentContainer } from "../components/common/contentContainer";
import { PageContainer } from "../components/common/pageContainer";
import { Topbar } from "../components/topbar";
import { ReviewsContent } from "../components/reviews/reviewsContent";

export default function Reviews() {
  return (
    <>
      <Head>
        <title>Reviews from Real™️ Users</title>
      </Head>
      <PageContainer>
        <ReviewsContents />
      </PageContainer>
    </>
  );
}

function ReviewsContents() {
  return (
    <>
      <Topbar />
      <ContentContainer>
        <ReviewsContent />
      </ContentContainer>
    </>
  );
}

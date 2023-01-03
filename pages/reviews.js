import Head from "next/head";
import { ContentContainer } from "../components/common/contentContainer";
import { PageContainer } from "../components/common/pageContainer";
import { Topbar } from "../components/topbar";

export default function Reviews() {
  return (
    <>
      <Head>
        <title>Reviews from Real™️ Users</title>
      </Head>
      <PageContainer>
        <ReviewsContent />
      </PageContainer>
    </>
  );
}

function ReviewsContent() {
  return (
    <>
      <Topbar />
      <ContentContainer></ContentContainer>
    </>
  );
}

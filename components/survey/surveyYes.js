import Image from "next/image";
import Link from "next/link";

export function SurveyYes() {
  return (
    <>
      <h3 className="text-3xl py-4">Please Seek Help.</h3>
      <Link href="https://www.google.com/search?q=Therapists+near+me">
        <a className="text-blue-600 underline text-md" target="_blank">
          {"Therapists near you"}
        </a>
      </Link>
      <br />
      <Link href="https://www.google.com/search?q=Suicide+helpline">
        <a className="text-blue-600 underline text-md" target="_blank">
          {"Suicide Helpline"}
        </a>
      </Link>

      <p>
        <br />
        <br />.<br />
        <br />.<br />
        <br />.<br />
        <br />.<br />
        <br />
        {
          "...buuut, before that, while you're still mentally ill, why not make the most of it and play an amazing game?"
        }
      </p>
      <Link
        href="https://store.steampowered.com/app/1256670/Library_Of_Ruina/"
        target={"_blank"}
      >
        <a>
          <div className="relative">
            <div className="peer">
              <Image
                src="/assets/surveyResults/angelaInviting.png"
                layout="responsive"
                width={1920}
                height={1000}
              />
            </div>
            <div className="invisible hover:visible peer-hover:visible z-10 top-0">
              <Image
                src="/assets/surveyResults/angelaInvitingShining.png"
                layout="fill"
              />
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}

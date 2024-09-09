import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ExploreTheReport from "@/components/ExploreTheReport";

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <TopBanner />
      <IntroductionVideo />
      <GoalSection />
      <InformationSection />
      <BecomeAMember />
      <FeatureSection />
      <ExploreTheReport />
      <ExploreSection />
    </>
  );
}

const TopBanner = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-row-reverse items-center bg-[#FFE281]">
      <div className="relative hidden md:block min-h-[656px] w-1/2 flex-1">
        <Image
          src={"/images/top-banner.png"}
          alt="aidurian-top-banner"
          fill
          sizes="100vw"
        />
      </div>
      <div className="flex-1 md:pl-[400px] p-4 md:p-0">
        <h1 className="bg-[#FABF03] text-lg text-white px-5 rounded max-w-fit mb-2">
          {t("Banner.welcome-to-ida")}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: t("Banner.title") }}
          className={`${playfairDisplay.className} font-bold text-5xl text-[#282937] mb-7`}
        />
        <h2 className="text-lg font-medium text-balance mb-6">
          {t("Banner.description")}
        </h2>
        <button
          type="button"
          className="text-white cursor-pointer font-bold text-lg py-2 pl-12 pr-[46px] bg-[#008481] shadow-md rounded flex flex-row items-start justify-start whitespace-nowrap transition-all"
        >
          {t("Banner.register")}
        </button>
      </div>
    </div>
  );
};

const IntroductionVideo = () => {
  return (
    <div className="py-24">
      <div className="container">
        <div>
          <Image
            className="block mx-auto"
            src={"/images/youtube-example.png"}
            alt="aidurian-introduction-video"
            width="744"
            height="459"
          />
        </div>
      </div>
    </div>
  );
};

const GoalSection = () => {
  const t = useTranslations();

  return (
    <div className="container mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        <div className="bg-[#FCC009] pl-9 pt-5">
          <div className="flex items-center gap-2 border-b-[1px] border-white pb-2 mb-5">
            <Image
              src={"/icon/leaf-icon.svg"}
              alt="leaf-icon"
              height={0}
              width={0}
              className="w-6 h-auto"
            />
            <h1 className="text-xl text-white font-bold uppercase">
              {t("GoalMissionVision.Goal.title")}
            </h1>
          </div>
          <p className="text-justify pr-9 md:pr-20 pb-9 text-white">
            {t("GoalMissionVision.Goal.description")}
          </p>
        </div>
        <div className="bg-[#008481] pl-9 pt-5">
          <div className="flex items-center gap-2 border-b-[1px] border-white pb-2 mb-5">
            <Image
              src={"/icon/leaf-icon.svg"}
              alt="leaf-icon"
              height={0}
              width={0}
              className="w-6 h-auto"
            />
            <h1 className="text-xl text-white font-bold uppercase">
              {t("GoalMissionVision.Mission.title")}
            </h1>
          </div>
          <p className="text-justify pr-9 md:pr-20 pb-9 text-white">
            {t("GoalMissionVision.Mission.description")}
          </p>
        </div>
        <div className="bg-[#FF963A] pl-9 pt-5">
          <div className="flex items-center gap-2 border-b-[1px] border-white pb-2 mb-5">
            <Image
              src={"/icon/leaf-icon.svg"}
              alt="leaf-icon"
              height={0}
              width={0}
              className="w-6 h-auto"
            />
            <h1 className="text-xl text-white font-bold uppercase">
              {t("GoalMissionVision.Vision.title")}
            </h1>
          </div>
          <p className="text-justify pr-9 md:pr-20 pb-9 text-white">
            {t("GoalMissionVision.Vision.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

const InformationSection = () => {
  const t = useTranslations();

  return (
    <div className="container mb-24">
      <div className="lg:w-2/3 mx-auto">
        <h1
          className={`${playfairDisplay.className} text-3xl light:text-[#282937] text-center mb-5`}
        >
          {t("HowWeHelpYou.title")}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: t("HowWeHelpYou.description") }}
          className="text-center text-xl mb-10"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Link
            href={"/feature/empowering-durian-professionals"}
            className="flex items-center gap-5 rounded-lg shadow-md hover:opacity-80 transition-all"
          >
            <div>
              <img
                src={"/images/info-1.png"}
                alt="info-1"
                className="min-w-24"
              />
            </div>
            <div>
              <h1 className="font-bold text-lg">{t("HowWeHelpYou.1")}</h1>
            </div>
          </Link>
          <Link
            href={"/feature/leading-the-future-of-durian-cultivation"}
            className="flex items-center gap-5 rounded-lg shadow-md hover:opacity-80 transition-all"
          >
            <div>
              <img
                src={"/images/info-3.png"}
                alt="info-3"
                className="min-w-24"
              />
            </div>
            <div>
              <h1 className="font-bold text-lg">{t("HowWeHelpYou.2")}</h1>
            </div>
          </Link>
          <Link
            href={"/feature/driving-change-in-the-durian-industry"}
            className="flex items-center gap-5 rounded-lg shadow-md hover:opacity-80 transition-all"
          >
            <div>
              <img
                src={"/images/info-2.png"}
                alt="info-2"
                className="min-w-24"
              />
            </div>
            <div>
              <h1 className="font-bold text-lg">{t("HowWeHelpYou.3")}</h1>
            </div>
          </Link>
          <Link
            href={"/feature/adapting-to-a-dynamic-market"}
            className="flex items-center gap-5 rounded-lg shadow-md hover:opacity-80 transition-all"
          >
            <div>
              <img
                src={"/images/info-4.png"}
                alt="info-4"
                className="min-w-24"
              />
            </div>
            <div>
              <h1 className="font-bold text-lg">{t("HowWeHelpYou.4")}</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const BecomeAMember = () => {
  const t = useTranslations();

  return (
    <div
      className="min-h-[993px] flex flex-col justify-center items-center"
      style={{
        background: "url(/images/become-a-member.png)",
        objectFit: "cover",
      }}
    >
      <div
        className="lg:w-2/5 p-10"
        style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
      >
        <h1
          className={`${playfairDisplay.className} font-medium text-3xl md:text-5xl leading-tight mb-5`}
        >
          {t("Banner2.title")}
        </h1>
        <p className="text-xl font-light mb-8">{t("Banner2.description")}</p>
        <button
          type="button"
          className="text-white cursor-pointer font-bold text-lg py-3 pl-12 pr-[46px] bg-[#008481] shadow-md rounded flex flex-row items-start justify-start whitespace-nowrap transition-all"
        >
          {t("Banner2.register")}
        </button>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const t = useTranslations();

  return (
    <div className="bg-[#EFEFEF] py-24">
      <div className="container">
        <div className="lg:w-2/3 mx-auto">
          <h1
            className={`${playfairDisplay.className} text-3xl light:text-[#282937] text-center mb-5`}
          >
            {t("SpecializedSupport.title")}
          </h1>
          <h2 className="text-center text-xl mb-10">
            {t("SpecializedSupport.description")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
            <div className="rounded shadow-lg">
              <img
                src={"/images/feature-1.jpg"}
                className="w-full h-[245px] object-cover"
              />
              <div className="py-5 px-4">
                <h1 className="pb-7 border-b-2 border-gray-200 text-center text-2xl mb-5">
                  {t("SpecializedSupport.1.title")}
                </h1>
                <p className="font-light text-center">
                  {t("SpecializedSupport.1.description")}
                </p>
              </div>
            </div>
            <div className="rounded shadow-lg">
              <img
                src={"/images/feature-2.jpg"}
                className="w-full h-[245px] object-cover"
              />
              <div className="py-5 px-4">
                <h1 className="pb-7 border-b-2 border-gray-200 text-center text-2xl mb-5">
                  {t("SpecializedSupport.2.title")}
                </h1>
                <p className="font-light text-center">
                  {t("SpecializedSupport.2.description")}
                </p>
              </div>
            </div>
            <div className="rounded shadow-lg">
              <img
                src={"/images/feature-3.jpg"}
                className="w-full h-[245px] object-cover"
              />
              <div className="py-5 px-4">
                <h1 className="pb-7 border-b-2 border-gray-200 text-center text-2xl mb-5">
                  {t("SpecializedSupport.3.title")}
                </h1>
                <p className="font-light text-center">
                  {t("SpecializedSupport.3.description")}
                </p>
              </div>
            </div>
          </div>
          <button className="border-[1px] border-[#008481] bg-white text-[#008481] font-medium block mx-auto rounded py-2 px-4">
            {t("SpecializedSupport.register")}
          </button>
        </div>
      </div>
    </div>
  );
};



const ExploreSection = () => {
  const t = useTranslations();

  return (
    <div className="explore-section py-24">
      <div className="container">
        <div className="lg:w-3/4 mx-auto">
          <h1
            className={`${playfairDisplay.className} text-3xl text-white text-center mb-5`}
          >
            {t("Explore.title")}
          </h1>
          <h2 className="text-center text-xl mb-14 text-white">
            {t("Explore.description")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8">
            <div className="border-l-[3px] border-[#FFEC16] pl-5 flex items-center gap-6">
              <img src={"/icon/users.svg"} alt="" />
              <Link
                className="text-2xl text-white underline"
                href={"/feature/about-us"}
              >
                {t("Explore.1")}
              </Link>
            </div>
            <div className="border-l-[3px] border-[#FFEC16] pl-5 flex items-center gap-6">
              <img src={"/icon/hard-drive.svg"} alt="" />
              <Link
                className="text-2xl text-white underline"
                href={"/feature/resources-and-services"}
              >
                {t("Explore.2")}
              </Link>
            </div>
            <div className="border-l-[3px] border-[#FFEC16] pl-5 flex items-center gap-6">
              <img src={"/icon/sliders.svg"} alt="" />
              <Link
                className="text-2xl text-white underline"
                href={"/feature/quality-control"}
              >
                {t("Explore.3")}
              </Link>
            </div>
            <div className="border-l-[3px] border-[#FFEC16] pl-5 flex items-center gap-6">
              <img src={"/icon/user-check.svg"} alt="" />
              <Link
                className="text-2xl text-white underline"
                href={"/feature/ida-partners"}
              >
                {t("Explore.4")}
              </Link>
            </div>
            <div className="border-l-[3px] border-[#FFEC16] pl-5 flex items-center gap-6">
              <img src={"/icon/user-plus.svg"} alt="" />
              <Link
                className="text-2xl text-white underline"
                href={"/feature/membership"}
              >
                {t("Explore.5")}
              </Link>
            </div>
            <div className="border-l-[3px] border-[#FFEC16] pl-5 flex items-center gap-6">
              <img src={"/icon/share-2.svg"} alt="" />
              <Link
                className="text-2xl text-white underline"
                href={"/feature/network"}
              >
                {t("Explore.6")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

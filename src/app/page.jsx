import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

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
          Welcome to IDA
        </h1>
        <h1
          className={`${playfairDisplay.className} font-bold text-5xl text-[#282937] mb-7`}
        >
          International
          <br />
          Durian Association
        </h1>
        <h2 className="text-lg font-medium text-balance mb-6">
          The International Durian Association (IDA) is a global non-profit
          organization committed to promoting sustainable development and
          exceptional quality in the durian industry. With a mission to connect
          producers, exporters, and consumers worldwide, IDA creates a robust
          platform for collaboration, aiming to enhance product standards and
          add value for all partners involved.
        </h2>
        <button
          type="button"
          className="text-white cursor-pointer font-bold text-lg py-2 pl-12 pr-[46px] bg-[#468448] shadow-md rounded flex flex-row items-start justify-start whitespace-nowrap transition-all"
        >
          Register your team
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
            <h1 className="text-xl text-white font-bold">OUR GOAL</h1>
          </div>
          <p className="text-justify pr-9 md:pr-20 pb-9 text-white">
            At the International Durian Association (IDA) our primary goal is to
            elevate the global recognition and appreciation of durian through
            innovative research, sustainable practices, and international
            collaboration. We aim to be the leading authority in the durian
            industry, fostering growth and excellence among producers,
            distributors, and enthusiasts worldwide.
          </p>
        </div>
        <div className="bg-[#468448] pl-9 pt-5">
          <div className="flex items-center gap-2 border-b-[1px] border-white pb-2 mb-5">
            <Image
              src={"/icon/leaf-icon.svg"}
              alt="leaf-icon"
              height={0}
              width={0}
              className="w-6 h-auto"
            />
            <h1 className="text-xl text-white font-bold">OUR MISSION</h1>
          </div>
          <p className="text-justify pr-9 md:pr-20 pb-9 text-white">
            Our mission is to support and advance the durian industry by
            promoting best practices in cultivation, ensuring high standards in
            quality and safety, and advocating for sustainable and eco-friendl y
            methods. We strive to create a network of experts, growers, and
            consumers who are passionate about durian, providing them with the
            resources, knowledge, and opportunities needed to thrive.
          </p>
        </div>
        <div className="bg-[#8CC541] pl-9 pt-5">
          <div className="flex items-center gap-2 border-b-[1px] border-white pb-2 mb-5">
            <Image
              src={"/icon/leaf-icon.svg"}
              alt="leaf-icon"
              height={0}
              width={0}
              className="w-6 h-auto"
            />
            <h1 className="text-xl text-white font-bold">OUR VISION</h1>
          </div>
          <p className="text-justify pr-9 md:pr-20 pb-9 text-white">
            Our vision is to become the premier global hub for durian innovation
            and excellence. We envision a future where durian is celebrated and
            enjoyed by people from all walks of life, where the industry thrives
            through sustainable and ethical practices, and where IDA serves as
            the central platform for education, advocacy, and collaboration in
            the durian community.
          </p>
        </div>
      </div>
    </div>
  );
};

const InformationSection = () => {
  return (
    <div className="container mb-24">
      <div className="lg:w-2/3 mx-auto">
        <h1
          className={`${playfairDisplay.className} text-3xl light:text-[#282937] text-center mb-5`}
        >
          How we help you and the durian industry evolve
        </h1>
        <h2 className="text-center text-xl mb-10">
          We empower change in individuals and organizations, helping durian
          <br />
          professionals adapt, grow, and lead
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Link
            href={"/empowering-durian-professionals"}
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
              <h1 className="font-bold text-lg">
                Empowering Durian Professionals
              </h1>
            </div>
          </Link>
          <Link
            href={"/leading-the-future-of-durian-cultivation"}
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
              <h1 className="font-bold text-lg">
                Leading the Future of Durian Cultivation
              </h1>
            </div>
          </Link>
          <Link
            href={"/driving-change-in-the-durian-industry"}
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
              <h1 className="font-bold text-lg">
                Driving Change in the Durian Industry
              </h1>
            </div>
          </Link>
          <Link
            href={"/adapting-to-a-dynamic-market"}
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
              <h1 className="font-bold text-lg">
                Adapting to a Dynamic Market
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const BecomeAMember = () => {
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
          Become a part of a dynamic community dedicated to advancing the durian
          industry.
        </h1>
        <p className="text-xl font-light mb-8">
          Explore our membership benefits and join today!
        </p>
        <button
          type="button"
          className="text-white cursor-pointer font-bold text-lg py-3 pl-12 pr-[46px] bg-[#446E18] shadow-md rounded flex flex-row items-start justify-start whitespace-nowrap transition-all"
        >
          Become a member
        </button>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <div className="bg-[#EFEFEF] py-24">
      <div className="container">
        <div className="lg:w-2/3 mx-auto">
          <h1
            className={`${playfairDisplay.className} text-3xl light:text-[#282937] text-center mb-5`}
          >
            Specialized support to fit your specific needs
          </h1>
          <h2 className="text-center text-xl mb-10">
            Wherever you are, we’re here.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
            <div className="rounded shadow-lg">
              <img src={"/images/feature-1.png"} className="w-full h-auto" />
              <div className="py-5 px-4">
                <h1 className="pb-7 border-b-2 border-gray-200 text-center text-2xl mb-5">
                  Generate excitement
                </h1>
                <p className="font-light text-center">
                  Unleash your passion for durian with IDA’s exciting events and
                  activities. Connect, explore, and celebrate the king of fruits
                  with us!
                </p>
              </div>
            </div>
            <div className="rounded shadow-lg">
              <img src={"/images/feature-2.png"} className="w-full h-auto" />
              <div className="py-5 px-4">
                <h1 className="pb-7 border-b-2 border-gray-200 text-center text-2xl mb-5">
                  Grab interest
                </h1>
                <p className="font-light text-center">
                  IDA provides you with a comprehensive and in-depth perspective
                  on durian, from its origins to modern cultivation techniques.
                </p>
              </div>
            </div>
            <div className="rounded shadow-lg">
              <img src={"/images/feature-3.png"} className="w-full h-auto" />
              <div className="py-5 px-4">
                <h1 className="pb-7 border-b-2 border-gray-200 text-center text-2xl mb-5">
                  Key Achievements
                </h1>
                <p className="font-light text-center">
                  IDA showcases prominent events and innovative initiatives
                  aimed at enhancing the quality and value of durian in the
                  global market.
                </p>
              </div>
            </div>
          </div>
          <button className="border-[1px] border-[#468448] bg-white text-[#468448] font-medium block mx-auto rounded py-2 px-4">
            Set up your free account
          </button>
        </div>
      </div>
    </div>
  );
};

const ExploreTheReport = () => {
  return (
    <div
      className="min-h-[993px] flex flex-col justify-center items-center"
      style={{
        background: "url(/images/explore-the-report.png)",
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
          Innovation, excellence, and community – these are the pillars that
          drive IDA
        </h1>
        <p className="text-xl font-light mb-8">
          We are committed to enhancing quality and promoting sustainable
          development in the global durian industry.
        </p>
        <button
          type="button"
          className="text-white cursor-pointer font-bold text-lg py-3 pl-12 pr-[46px] bg-[#446E18] shadow-md rounded flex flex-row items-start justify-start whitespace-nowrap transition-all"
        >
          Explore the report now!
        </button>
      </div>
    </div>
  );
};

const ExploreSection = () => {
  return (
    <div className="explore-section py-24">
      <div className="container">
        <div className="lg:w-3/4 mx-auto">
          <h1
            className={`${playfairDisplay.className} text-3xl text-white text-center mb-5`}
          >
            Explore our resources, services, and networking opportunities
          </h1>
          <h2 className="text-center text-xl mb-14 text-white">
            to collectively advance the durian sector
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8">
            <div className="border-l-[3px] border-[#FFEC16] pl-5 flex items-center gap-6">
              <img src={"/icon/users.svg"} alt="" />
              <Link className="text-3xl text-white underline" href={"/about-us"}>
                About IDA
              </Link>
            </div>
            <div className="border-l-[3px] border-[#FFEC16] pl-5 flex items-center gap-6">
              <img src={"/icon/hard-drive.svg"} alt="" />
              <Link
                className="text-3xl text-white underline"
                href={"/resources-and-services"}
              >
                Resources & Services
              </Link>
            </div>
            <div className="border-l-[3px] border-[#FFEC16] pl-5 flex items-center gap-6">
              <img src={"/icon/sliders.svg"} alt="" />
              <Link className="text-3xl text-white underline" href={"/quality-control"}>
                Quality control
              </Link>
            </div>
            <div className="border-l-[3px] border-[#FFEC16] pl-5 flex items-center gap-6">
              <img src={"/icon/user-check.svg"} alt="" />
              <Link className="text-3xl text-white underline" href={"/ida-partners"}>
                IDA partners
              </Link>
            </div>
            <div className="border-l-[3px] border-[#FFEC16] pl-5 flex items-center gap-6">
              <img src={"/icon/user-plus.svg"} alt="" />
              <Link className="text-3xl text-white underline" href={"/membership"}>
                Membership
              </Link>
            </div>
            <div className="border-l-[3px] border-[#FFEC16] pl-5 flex items-center gap-6">
              <img src={"/icon/share-2.svg"} alt="" />
              <Link className="text-3xl text-white underline" href={"/network"}>
                Network
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

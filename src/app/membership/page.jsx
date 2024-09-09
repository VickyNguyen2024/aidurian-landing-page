import SectionBlockHeader from "@/components/SectionBlockHeader";

const membershipData = {
  title: "Membership",
  subtitle:
    "Are you passionate about durians and eager to connect with a global community of like-minded individuals?",
  highlight: "JOIN US AND ENJOY EXCLUSIVE BENEFITS!",
  image: {
    url: "/images/membership-2.jpg",
    alt: "Membership Benefits",
  },
  description: [
    "As a member of the International Durian Association, you'll be part of a vibrant and growing network dedicated to the advancement of the durian industry.",
    "We offer several membership options tailored to meet your needs, whether you're a grower, researcher, business professional, or durian enthusiast. Here are some of the benefits you'll enjoy as a member:",
  ],
  waysToGetInvolved: [
    "• Access to Exclusive Resources: Gain entry to our extensive library of research papers, industry reports, and best practice guides that are available only to members.",
    "• Networking Opportunities: Connect with other members around the world through our online platform, regional events, and international conferences. Share insights, build partnerships, and collaborate on projects.",
    "• Educational Programs: Participate in workshops, webinars, and training sessions led by experts to stay up-to-date with the latest trends, innovations, and techniques in the durian industry.",
    "• Discounted Rates: Enjoy reduced fees for our events, publications, and certifications, as well as exclusive offers from our partners.",
    "• Influence the Future: Have a voice in shaping the future of the durian industry by participating in our committees, contributing to policy discussions, and voting in association elections.",
    "• Member Recognition: Be recognized for your contributions and achievements within the community through our awards program and member spotlights.",
  ],
  conclusion: {
    text: "Join us today to take advantage of these benefits and be a part of a community that shares your passion for durians. Together, we can drive innovation, sustainability, and success in the durian industry worldwide!",
  },
};

export const metadata = {
  title: "Membership | AI Durian | International Durian Association",
  description: "Membership | AI Durian | International Durian Association",
};

export default function Membership() {
  return (
    <>
      <SectionBlockHeader
        height="600"
        title="Become a Member of the International Durian Association!"
        url="url(/images/membership.jpg)"
      />
      <div className="container md:max-w-[860px] mb-20">
        <p className="text-[#676767] text-lg font-medium text-center mb-3">
          Home/<span className="text-[#008481]">{membershipData.title}</span>
        </p>
        <h1 className="text-center text-3xl md:text-5xl uppercase font-bold mb-4">
          {membershipData.title}
        </h1>
        <h2 className="text-center font-medium text-xl mb-5">
          {membershipData.subtitle}
        </h2>
        <h3 className="text-center text-[#01827D] font-medium text-3xl">
          {membershipData.highlight}
        </h3>
        <div className="w-[247px] border-t-4 border-[#01827D] mt-2 mx-auto mb-14"></div>
        <img
          src={membershipData.image.url}
          alt={membershipData.image.alt}
          className="mb-14"
        />

        <div>
          {membershipData.description.map((paragraph, index) => (
            <p className="text-justify leading-7 text-[#727272]" key={index}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mb-5">
          <ul>
            {membershipData.waysToGetInvolved.map((item, index) => (
              <li className="text-justify leading-7 text-[#727272]" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#FDC20E] p-4">
          <p className="text-justify text-white">
            {membershipData.conclusion.text}
          </p>
        </div>
      </div>
    </>
  );
}

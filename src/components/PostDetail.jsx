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

export default function PostDetail({ post }) {
  return (
    <>
      {post.bannerImage && <SectionBlockHeader
        height="600"
        mb="5"
        url={`url(${post.bannerImage})`}
      />}
      <div className="container md:max-w-[860px] mb-20 pt-10">
        <p className="text-[#676767] text-lg font-medium text-center mb-3">
          Home/
          <span>
            News Events/<span className="text-[#008481]">{post.title}</span>
          </span>
        </p>
        <h1 className="text-center text-xl uppercase font-bold mb-4">
          {post.title}
        </h1>
        <div className="w-[247px] border-t-4 border-[#01827D] mt-2 mx-auto mb-10"></div>
        <div>
            {post.description}
        </div>
      </div>
    </>
  );
}

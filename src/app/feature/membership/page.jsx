import SectionBlockHeader from "@/components/SectionBlockHeader";

const MembershipData = [
  {
    title: "Membership",
    content: [
      "Joining the International Durian Association (IDA) means becoming part of a global community dedicated to the growth, innovation, and excellence of the durian industry.",
      "Our members are at the heart of everything we do, and we strive to provide them with the tools, resources, and opportunities they need to succeed in a competitive market.",
    ],
  },
  {
    title: "Why Become a Member?",
    content: [
      "As an IDA member, you gain access to an extensive network of professionals, businesses, and experts from around the world who share your passion for durians.",
      "Here are some of the exclusive benefits of becoming a member:",
      "• Access to Cutting-Edge Research and Insights: Stay informed with our comprehensive research reports, market analyses, and industry updates.",
      "• Exclusive Networking Opportunities: Connect with other members at our events, workshops, and conferences.",
      "• Educational Programs and Workshops: Enhance your skills through tailored training programs on various topics.",
      "• Quality Certification and Recognition: Gain recognition with our IDA certification, enhancing your product's reputation.",
      "• Advocacy and Representation: Benefit from IDA's efforts to advocate for fair trade practices and sustainable development.",
    ],
  },
  {
    title: "Membership Levels",
    content: [
      "IDA offers various membership levels to suit the diverse needs of our community:",
      "• Basic Membership: Ideal for individuals and small businesses looking to access our resources and network.",
      "• Premium Membership: Designed for larger organizations seeking comprehensive support and recognition.",
    ],
  },
  {
    title: "Join Us Today",
    content: [
      "Become a part of the International Durian Association and take your place in the global durian community.",
      "Together, we can achieve new heights of success and innovation.",
      "Contact us today to learn more about our membership benefits and how to join.",
    ],
  },
];

export default function Membership() {
  return (
    <div className="feature-block">
      <div className="container py-20">
        <SectionBlockHeader
          height="321"
          title="Membership"
          url="url(/images/membership.jpg)"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MembershipData.map((section, index) => (
            <div key={index} className="p-4">
              <h2 className="mb-4 border-t-4 text-white font-bold text-4xl border-[#FDC00D] pt-2">
                {section.title}
              </h2>
              {section.content.map((paragraph, idx) => (
                <p key={idx} className="mb-2 text-white text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import SectionBlockHeader from "@/components/SectionBlockHeader";

const IDAPartnersData = [
  {
    title: "IDA Partners",
    content: [
      "At the International Durian Association (IDA), we believe that collaboration is key to advancing the global durian industry.",
      "Our partnerships are the cornerstone of our mission, enabling us to connect with leading organizations, businesses, and experts who share our commitment to quality, sustainability, and innovation.",
    ],
  },
  {
    title: "Why Partner with IDA?",
    content: [
      "Partnering with IDA means becoming part of a dynamic network that spans the globe.",
      "Our partners benefit from exclusive access to our extensive resources, including research, market insights, and networking opportunities.",
      "Together, we drive forward the standards of the durian industry, ensuring that every product meets the highest levels of excellence.",
    ],
  },
  {
    title: "Our Commitment to Partners",
    content: [
      "We are dedicated to building strong, mutually beneficial relationships with our partners. At IDA, we offer:",
      "• Strategic Collaboration: Work with us on projects that push the boundaries of what is possible in the durian industry, from sustainable farming practices to cutting-edge processing techniques.",
      "• Global Reach: Gain exposure to new markets and connect with potential clients and collaborators across the world through our expansive network.",
      "• Innovation and Growth: Access to the latest research and technology, helping you stay ahead of industry trends and enhance your business's competitive edge.",
      "• Brand Visibility: As an IDA partner, your brand will be showcased on our platforms, enhancing your reputation and reaching a wider audience.",
    ],
  },
  {
    title: "Join Our Network of Leading Partners",
    content: [
      "We invite organizations, businesses, and institutions that are passionate about the durian industry to join us as partners.",
      "Together, we can create a future where durian is celebrated worldwide for its quality, diversity, and sustainable cultivation.",
      "Contact us to learn more about becoming an IDA Partner and explore the exciting opportunities that await.",
    ],
  },
];

export const metadata = {
  title: "IDA Partners | AI Durian | International Durian Association",
  description: "IDA Partners | AI Durian | International Durian Association",
};

export default function IDAPartners() {
  return (
    <div className="feature-block">
      <div className="container py-20">
        <SectionBlockHeader
          // title="IDA Partners"
          height="321"
          url="url(/images/ida-partner.jpg)"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {IDAPartnersData.map((section, index) => (
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

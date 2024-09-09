import SectionBlockHeader from "@/components/SectionBlockHeader";

const qualityControlData = [
  {
    title: "Quality Control",
    content: [
      "At the International Durian Association (IDA), quality is at the core of everything we do. We understand that maintaining the highest standards of quality is essential for the success and reputation of the global durian industry.",
      "That’s why we are committed to rigorous quality control measures that ensure our members’ durian products meet the most stringent international standards.",
    ],
  },
  {
    title: "Our Commitment to Quality",
    content: [
      "Quality control is more than just a process—it is a promise we make to our members and consumers worldwide.",
      "We are dedicated to upholding this promise by implementing comprehensive quality control protocols that cover every stage of the durian supply chain, from cultivation to distribution.",
    ],
  },
  {
    title: "Quality Certification",
    content: [
      "Our IDA Quality Certification is a hallmark of excellence recognized globally. It signifies that a product has undergone thorough testing and meets the highest standards of quality and safety.",
      "This certification helps our members gain trust and recognition in international markets, opening doors to new business opportunities.",
    ],
  },
  {
    title: "Continuous Improvement",
    content: [
      "Quality control is a continuous journey. At IDA, we are always looking for ways to improve our standards and practices.",
      "We collaborate with experts and conduct regular reviews to ensure our quality control standards are up-to-date and effective in meeting the evolving needs of the industry.",
    ],
  },
  {
    title: "Our Quality Control Standards",
    content: [
      "• Cultivation Practices: We work closely with farmers and producers to promote sustainable and best-practice farming techniques that enhance the quality of the durians and protect the environment.",
      "• Harvesting and Post-Harvest Handling: Proper harvesting methods and careful post-harvest handling are critical to maintaining the freshness and quality of durians.",
      "• Processing and Packaging: We set high standards for processing and packaging to ensure that the durians retain their unique flavor and texture while meeting all food safety regulations.",
      "• Transportation and Storage: Maintaining the right conditions during transportation and storage is essential to preserving the quality of durians.",
    ],
  },
];

export const metadata = {
  title: "Quality Control | AI Durian | International Durian Association",
  description: "Quality Control | AI Durian | International Durian Association",
};

export default function QualityControl() {
  return (
    <div className="feature-block">
      <div className="container py-20">
        <SectionBlockHeader
          // title="Quality control"
          height="321"
          url="url(/images/quality-control.jpg)"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {qualityControlData.map((section, index) => (
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 col-span-2">
            <h2 className="mb-4 border-t-4 text-white font-bold text-4xl border-[#FDC00D] pt-2">
              Partner with Us for Quality Excellence
            </h2>
            <p className="mb-2 text-white text-justify">
              Join IDA and benefit from our commitment to quality. With our
              support, you can ensure your durian products meet the highest
              standards, gaining a competitive edge in the global market.
              Together, we can elevate the durian industry to new heights of
              quality and excellence.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

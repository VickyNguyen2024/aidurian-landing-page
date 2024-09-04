import SectionBlockHeader from "@/components/SectionBlockHeader";

const empoweringDurianProfessionalsData = [
  {
    title: "Empowering Durian Professionals",
    content: [
      "At the International Durian Association (IDA), we believe that the success of the durian industry depends on the skills, knowledge, and dedication of its professionals.",
      "Our mission is to empower durian professionals across the globe by providing them with the tools, resources, and opportunities they need to excel in their fields and drive the industry forward.",
    ],
  },
  {
    title: "Our Approach",
    content: [
      "We are committed to fostering a culture of excellence and innovation in the durian industry. By focusing on education, collaboration, and professional development, we empower our members to reach their full potential and contribute meaningfully to the growth and sustainability of the durian sector.",
    ],
  },
  {
    title: "Building a Stronger Future Together",
    content: [
      "At IDA, we are dedicated to building a stronger, more resilient durian industry by investing in the people who make it all possible.",
      "By empowering durian professionals with the knowledge, skills, and networks they need, we are laying the foundation for a future where the durian industry thrives on excellence and sustainability.",
    ],
  },
  {
    title: "Join Us in Our Mission",
    content: [
      "If you are a durian professional looking to enhance your skills, expand your network, and make a significant impact in the industry, IDA is here to support you.",
      "Join us and be a part of a global community that is shaping the future of the durian industry.",
    ],
  },
  {
    title: "What We Offer",
    content: [
      "• Professional Training and Development: We offer a wide range of training programs and workshops designed to enhance the skills of durian professionals at all levels. From advanced farming techniques to export regulations and market strategies, our courses provide the knowledge needed to succeed in a competitive environment.",
      "• Networking Opportunities: Connecting with peers, industry leaders, and experts is crucial for professional growth. IDA organizes events, conferences, and forums where durian professionals can share experiences, exchange ideas, and form valuable partnerships.",
      "• Access to Research and Innovation: Stay ahead of the curve with access to the latest research, trends, and innovations in the durian industry. Our members benefit from a wealth of information that helps them stay informed and make strategic decisions.",
      "• Mentorship and Guidance: Our mentorship programs pair experienced industry veterans with those looking to advance their careers, providing guidance, support, and valuable insights.",
    ],
  },
];

export default function EmpoweringDurianProfessionals() {
  return (
    <div className="feature-block">
      <div className="container py-20">
        <SectionBlockHeader
          // title="Empowering Durian Professionals"
          height="321"
          url="url(/images/feature-4.jpg)"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {empoweringDurianProfessionalsData.map((section, index) => (
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

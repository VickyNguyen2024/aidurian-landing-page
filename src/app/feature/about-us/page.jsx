import SectionBlockHeader from "@/components/SectionBlockHeader";

const aboutIDAData = [
  {
    title: "About Us",
    content: [
      "Welcome to the International Durian Association (IDA), a pioneering global non-profit organization dedicated to advancing the durian industry with a focus on innovation, sustainability, and quality excellence.",
      "Founded with a vision to unite durian enthusiasts, growers, exporters, and consumers from around the world, IDA is the premier platform that fosters collaboration and drives the future of the durian market.",
    ],
  },
  {
    title: "Our Mission",
    content: [
      "At IDA, our mission is clear: to elevate the global standing of durian by enhancing production standards, promoting sustainable practices, and ensuring that the highest levels of quality are achieved throughout the supply chain.",
      "We are committed to empowering our members through education, research, and resources that enable them to thrive in a competitive marketplace.",
    ],
  },
  {
    title: "What We Do",
    content: [
      "IDA provides a comprehensive suite of services aimed at supporting the durian industry on a global scale. Our offerings include:",
      "• Quality Certification: We set rigorous standards for durian quality and safety, providing certifications that assure consumers and partners of premium-grade products.",
      "• Research and Development: Our team collaborates with experts and institutions worldwide to drive innovation and improve cultivation techniques, ensuring the longevity and resilience of durian crops.",
      "• Education and Training: We offer a variety of educational programs and workshops designed to enhance the skills and knowledge of our members, from farmers to exporters.",
      "• Advocacy and Networking: IDA serves as a voice for the durian industry, advocating for fair trade practices and fostering connections among stakeholders across the globe.",
    ],
  },
  {
    title: "Our Community",
    content: [
      "As an IDA member, you join a diverse and dynamic community of individuals and organizations who share a passion for durians.",
      "Our members gain access to exclusive resources, networking opportunities, and international markets, all while contributing to a sustainable and thriving global durian industry.",
    ],
  },
  {
    title: "Join Us",
    content: [
      "We invite you to become part of our vibrant community and help shape the future of the durian industry.",
      "Whether you are a grower, exporter, researcher, or simply a durian enthusiast, there is a place for you at IDA.",
      "Together, we can achieve excellence and make a lasting impact on the world of durian.",
      "Explore our website to learn more about our initiatives, membership opportunities, and the benefits of being part of the International Durian Association.",
    ],
  },
];

export default function AboutUs() {
  return (
    <div className="feature-block">
      <div className="container py-20">
        <SectionBlockHeader
          // title="ABOUT IDA"
          height="321"
          url="url(/images/about-ida.jpg)"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutIDAData.map((section, index) => (
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

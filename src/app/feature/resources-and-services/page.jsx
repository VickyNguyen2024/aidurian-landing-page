const resourcesAndServicesData = [
    {
      title: "Resources and Services",
      content: [
        "At the International Durian Association (IDA), we offer a wide range of specialized resources and services to support and promote the growth of the global durian industry.",
        "We understand that the success of our members and partners depends on access to accurate information, comprehensive training, and advanced support services.",
        "Therefore, IDA has built a solid platform to provide the best value to the durian community."
      ]
    },
    {
      title: "Our Resources",
      content: [
        "• Research and Market Information: We provide detailed research reports on market trends, demand analysis, and factors affecting the durian industry. This information helps our members make informed and strategic business decisions.",
        "• Guides and Technical Documents: We offer guides and technical documents to support best practices in durian cultivation and processing. From sustainable farming techniques to post-harvest handling processes, our materials are designed to help farmers and producers optimize efficiency and product quality.",
        "• Document Library: A diverse resource of research papers, expert articles, and case studies from around the world, keeping you updated with the latest knowledge in the durian industry."
      ]
    },
    {
      title: "Our Services",
      content: [
        "• Quality Certification: Our quality certification services ensure that durian products meet the highest standards of food safety and quality. The IDA certification is a prestigious mark of excellence recognized globally.",
        "• Training and Workshops: IDA regularly organizes training programs and workshops to enhance the skills and knowledge of our members. We offer courses on farm management, post-harvest technology, and international marketing, tailored to meet the needs of the industry.",
        "• Technical and Strategic Consulting: We provide professional consulting services on technical issues and business strategies, helping our partners and members develop and expand their operations effectively and sustainably."
      ]
    },
    {
      title: "Growing Together",
      content: [
        "IDA is committed to providing top-notch resources and services to support the sustainable growth of the durian industry.",
        "We invite you to explore more about the resources and services we offer and join us in achieving new successes."
      ]
    }
  ];

export default function ResourcesAndServices() {
  return (
    <div className="feature-block">
      <div className="container py-20">
        <h1 className="text-center text-white uppercase font-bold text-3xl md:text-6xl mb-20">
          Resources And Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resourcesAndServicesData.map((section, index) => (
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

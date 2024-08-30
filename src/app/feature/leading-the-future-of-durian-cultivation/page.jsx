const leadingTheFutureOfDurianCultivationData = [
  {
    title: "Leading the Future of Durian Cultivation",
    content: [
      "As the global durian market continues to expand, the International Durian Association (IDA) is at the forefront of leading advancements in durian cultivation.",
      "Our commitment to innovation, sustainability, and excellence ensures that we are not only keeping pace with the growth of the industry but are actively shaping its future.",
    ],
  },
  {
    title: "Join Us in Shaping the Future",
    content: [
      "The future of durian cultivation is bright, and we invite you to be a part of it.",
      "Join the International Durian Association and contribute to a sustainable, innovative, and thriving durian industry. Together, we can lead the way toward a better future for durian growers, consumers, and the planet.",
    ],
  },
  {
    title: "Our Vision for the Future",
    content: [
      "At IDA, we envision a future where durian cultivation is synonymous with sustainability, quality, and innovation.",
      "We strive to create an environment that respects the environment, maximizes efficiency, and meets the growing demand for high-quality durians worldwide.",
    ],
  },
  {
    title: "Our Commitment to Excellence",
    content: [
      "Leading the future of durian cultivation requires a commitment to excellence.",
      "At IDA, we are dedicated to maintaining the highest standards in all aspects of durian farming. From planting to harvesting, we ensure that our members have access to the best practices and resources needed to succeed.",
    ],
  },
  {
    title: "Key Strategies for Leading Durian Cultivation",
    content: [
      "1. **Promoting Sustainable Practices**: Sustainability is the cornerstone of our approach to durian cultivation. We promote environmentally friendly farming techniques that reduce waste, conserve resources, and protect biodiversity. By adopting sustainable practices, we ensure the long-term health of durian plantations and the surrounding ecosystems.",
      "2. **Advancing Research and Development**: Innovation is essential for the future of durian cultivation. We invest in research and development to discover new cultivation methods, improve disease resistance, and enhance fruit quality. Our partnerships with academic institutions and research organizations drive breakthroughs that benefit the entire industry.",
      "3. **Implementing Precision Agriculture**: Precision agriculture technologies enable farmers to optimize their operations, reduce costs, and increase yields. We encourage the adoption of these technologies, such as soil sensors, drone monitoring, and data analytics, to improve decision-making and achieve better outcomes.",
      "4. **Training and Education**: Educating farmers and producers is crucial for advancing durian cultivation. We provide training programs and workshops that cover best practices in farming, pest management, post-harvest handling, and more. By equipping our members with the latest knowledge and skills, we help them achieve greater success in their endeavors.",
      "5. **Building a Collaborative Community**: A strong, collaborative community is key to driving progress in durian cultivation. We foster a network of growers, researchers, and industry experts who share insights, experiences, and innovations.",
    ],
  },
];

export default function LeadingTheFutureOfDurianCultivation() {
  return (
    <div className="feature-block">
      <div className="container py-20">
        <h1 className="text-center text-white uppercase font-bold text-3xl md:text-6xl mb-20">
          Leading The Future Of Durian Cultivation
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadingTheFutureOfDurianCultivationData.map((section, index) => (
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

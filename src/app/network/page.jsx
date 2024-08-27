const networkData = [
  {
    title: "Network",
    content: [
      "The International Durian Association (IDA) is built on the foundation of a robust global network that connects growers, exporters, researchers, and industry experts dedicated to advancing the durian industry.",
      "Our network is one of our greatest strengths, fostering collaboration, innovation, and shared success across the durian value chain.",
    ],
  },
  {
    title: "Benefits of Being Part of Our Network",
    content: [
      "Joining the IDA network means becoming part of a dynamic and supportive community committed to mutual success. Members of our network enjoy:",
      "• Exclusive Networking Events: Participate in events, workshops, and conferences that bring together leaders and influencers from the durian industry. These gatherings provide valuable opportunities for networking, learning, and collaboration.",
      "• Access to Expert Insights: Gain insights from leading experts and practitioners in the durian field, staying up-to-date with the latest trends, technologies, and market dynamics.",
      "• Strategic Partnerships: Form strategic alliances with other members and partners to explore new opportunities, develop innovative solutions, and achieve shared goals.",
      "• Community Support: Benefit from a supportive community that is always ready to share advice, experiences, and resources to help each other succeed.",
    ],
  },
  {
    title: "Join Our Global Network",
    content: [
      "At IDA, we believe that the strength of our community lies in its diversity and collective expertise.",
      "We invite durian growers, exporters, researchers, industry professionals, and enthusiasts to join our global network. Together, we can create a more connected, innovative, and prosperous durian industry.",
      "Explore our network and discover the many ways you can get involved. Contact us today to learn more about joining the International Durian Association and becoming a part of our global community.",
    ],
  },
];

export default function Network() {
  return (
    <div className="feature-block">
      <div className="container py-20">
        <h1 className="text-center text-white uppercase font-bold text-3xl md:text-6xl mb-20">
          Network
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {networkData.map((section, index) => (
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

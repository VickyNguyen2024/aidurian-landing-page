const drivingChangeInTheDurianIndustryData = [
  {
    title: "Driving Change in the Durian Industry",
    content: [
      "The International Durian Association (IDA) is committed to driving transformative change within the durian industry.",
      "As a leader in innovation and sustainability, we believe that proactive strategies and forward-thinking initiatives are essential to fostering growth, enhancing quality, and ensuring the long-term success of the durian sector.",
    ],
  },
  {
    title: "Join Us in Shaping the Future",
    content: [
      "The durian industry is at a pivotal point, and now is the time to act. By joining the International Durian Association, you become part of a movement dedicated to driving positive change and shaping a sustainable future for durian.",
      "Together, we can create a thriving industry.",
    ],
  },
  {
    title: "Our Vision for Change",
    content: [
      "Our vision is to create a durian industry that is not only prosperous but also sustainable and resilient. We aim to set new standards of excellence by focusing on several key areas:",
      "• Sustainability and Environmental Responsibility: We promote sustainable farming practices that protect the environment while enhancing productivity and quality. By advocating for responsible resource use and eco-friendly technologies, we strive to reduce the environmental footprint of durian cultivation.",
      "• Innovation and Technology: Embracing new technologies is crucial to modernizing the durian industry. We support the adoption of advanced farming techniques, precision agriculture, and innovative processing methods that improve efficiency and product quality.",
      "• Market Expansion and Access: We are dedicated to opening up new markets for durian products and increasing global demand by connecting growers with international buyers and facilitating trade partnerships.",
      "• Quality and Safety Standards: Ensuring that durian products meet the highest quality and safety standards is essential to maintaining market reputation. We provide certification and support for implementing best practices throughout the supply chain.",
    ],
  },
  {
    title: "Strategic Initiatives to Drive Change",
    content: [
      "IDA implements a variety of strategic initiatives designed to foster change and drive the durian industry forward:",
      "• Educational Programs: We offer training and workshops to educate durian farmers, producers, and exporters on sustainable practices, innovative technologies, and market trends.",
      "• Research and Development: By investing in research and development, we support the discovery of new methods and technologies that can enhance durian cultivation, processing, and distribution.",
      "• Advocacy and Policy Influence: We work closely with governments, trade organizations, and industry bodies to advocate for policies that support sustainable growth, fair trade, and innovation in the durian sector.",
      "• Community Building: Building a strong, collaborative community is key to driving change. Through our events and networking opportunities, we foster relationships among industry stakeholders, encouraging cooperation and knowledge-sharing.",
    ],
  },
];

export default function DrivingChangeInTheDurianIndustry() {
  return (
    <div className="feature-block">
      <div className="container py-20">
        <h1 className="text-center text-white uppercase font-bold text-3xl md:text-6xl mb-20">
          Driving Change In The Durian Industry
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {drivingChangeInTheDurianIndustryData.map((section, index) => (
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

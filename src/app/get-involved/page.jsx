const getInvolvedData = {
  title: "Get Involved",
  subtitle: "Are you passionate about durians and want to make a difference?",
  highlight: "THERE ARE MANY WAYS YOU CAN BE INVOLVED!",
  image: {
    url: "/images/get-involved-2.png", // Replace this with your actual image URL
    alt: "Get Involved",
  },
  description: [
    "At the International Durian Association, we believe that everyone has a role to play in shaping the future of the durian industry.",
    "Whether you're a grower, a researcher, a business owner, or simply a durian enthusiast, there are numerous ways you can contribute and be a part of our global community:",
  ],
  waysToGetInvolved: [
    "• Join as a Member: Become a member to access exclusive resources, events, and networking opportunities with industry experts from around the world.",
    "• Participate in Our Initiatives: Get involved in our projects and programs that aim to improve durian cultivation practices, promote sustainability, and enhance market access for durian producers.",
    "• Volunteer Your Skills: Offer your expertise by volunteering in various capacities, from research and development to community outreach and event planning.",
    "• Collaborate with Us: Partner with the International Durian Association on research projects, marketing campaigns, or educational programs that align with our mission and goals.",
    "• Become a Partner: Explore partnership opportunities with us. Whether you're a company, organization, or individual looking to expand your impact, partnering with the International Durian Association allows you to leverage our network and resources to achieve mutual goals. From joint ventures to sponsorships and collaborative projects, let’s grow together!",
    "• Share Your Story: Contribute to our blog, share your experiences, or present at our events to inspire others and foster a deeper appreciation for durians.",
  ],
  conclusion: {
    text: "No matter how you choose to get involved, your participation will make a significant impact. Join us today and be a part of something bigger—let's work together to promote the love and knowledge of durians around the world!",
  },
};

export const metadata = {
  title: "Get Involved | AI Durian | International Durian Association",
  description: "Get Involved | AI Durian | International Durian Association",
};

export default function GetInvolved() {
  return (
    <>
      <div
        className="section-block-header min-h-[200px] md:min-h-[600px] mb-20"
        style={{ backgroundImage: "url(/images/get-involved.jpg)" }}
      >
        <h1 className="text-3xl font-medium text-white md:text-6xl">
          Looking to get involved?
        </h1>
      </div>
      <div className="container md:max-w-[860px] mb-20">
        <p className="text-[#676767] text-lg font-medium text-center mb-3">
          Home/<span className="text-[#008481]">{getInvolvedData.title}</span>
        </p>
        <h1 className="text-center text-3xl md:text-5xl uppercase font-bold mb-4">
          {getInvolvedData.title}
        </h1>
        <h2 className="text-center font-medium text-xl mb-5">
          {getInvolvedData.subtitle}
        </h2>
        <h3 className="text-center text-[#01827D] font-medium text-3xl">
          {getInvolvedData.highlight}
        </h3>
        <div className="w-[247px] border-t-4 border-[#01827D] mt-2 mx-auto mb-14"></div>
        <img
          src={getInvolvedData.image.url}
          alt={getInvolvedData.image.alt}
          className="mb-14"
        />

        <div>
          {getInvolvedData.description.map((paragraph, index) => (
            <p className="text-justify leading-7 text-[#727272]" key={index}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mb-5">
          <ul>
            {getInvolvedData.waysToGetInvolved.map((item, index) => (
              <li className="text-justify leading-7 text-[#727272]" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#FDC20E] p-4">
          <p className="text-justify text-white">
            {getInvolvedData.conclusion.text}
          </p>
        </div>
      </div>
    </>
  );
}

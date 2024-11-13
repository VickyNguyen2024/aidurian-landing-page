import SectionBlockHeader from "@/components/SectionBlockHeader";
import Link from "next/link";
import { newsAndEvents } from "@/data/news-and-events";

export const metadata = {
  title: "News and Events | AI Durian | International Durian Association",
  description: "News and Events | AI Durian | International Durian Association",
};

export default function NewsAndEvents() {
  return (
    <>
      <SectionBlockHeader height="600" url="url(/images/events.png)" />
      <div className="container md:max-w-[1024px] mb-20">
        <p className="text-[#676767] text-lg font-medium text-center mb-3">
          Home/<span className="text-[#008481]">News Events</span>
        </p>
        <h1 className="text-center text-3xl md:text-5xl uppercase font-bold mb-4">
          News/Events
        </h1>
        <div className="w-[247px] border-t-4 border-[#01827D] mt-2 mx-auto mb-14"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {newsAndEvents.map((item) => (
            <div className="shadow-lg" key={item.id}>
              <div>
                <Link href={`/news-and-events/${item.id}`}>
                  <img src={item.thumbnail} alt="" />
                </Link>
              </div>
              <div className="p-4 pt-0">
                <Link
                  href={`/news-and-events/${item.id}`}
                  className="text-center font-bold line-clamp-1  py-5 max-w-full mb-5"
                >
                  {item.title}
                </Link>
                <p className="text-center py-5 line-clamp-2 border-t-[1px] border-b-gray-200">
                  {item.shortDescription}
                </p>
                <p className="text-center text-[#979797] mt-5">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

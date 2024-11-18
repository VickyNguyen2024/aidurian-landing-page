"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ExploreTheReport = () => {
  // const t = useTranslations();

  return (
    <div className="mb-24 md:m-0">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="">
          <CarouselItem>
            <div>
              <img src="/images/carousel-1.jpg" alt="" className="w-full block mx-auto object-cover lg:max-h-[700px] max-h-[200px]" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <img src="/images/carousel-2.jpg" alt="" className="w-full block mx-auto object-cover lg:max-h-[700px] max-h-[200px]" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <img src="/images/carousel-3.jpg" alt="" className="w-full block mx-auto object-cover lg:max-h-[700px] max-h-[200px]" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <img src="/images/carousel-4.jpg" alt="" className="w-full block mx-auto object-cover lg:max-h-[700px] max-h-[200px]" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <img src="/images/carousel-5.jpg" alt="" className="w-full block mx-auto object-cover lg:max-h-[700px] max-h-[200px]" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <img src="/images/carousel-6.jpg" alt="" className="w-full block mx-auto object-cover lg:max-h-[700px] max-h-[200px]" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <img src="/images/carousel-7.jpg" alt="" className="w-full block mx-auto object-cover lg:max-h-[700px] max-h-[200px]" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <img src="/images/carousel-8.jpg" alt="" className="w-full block mx-auto object-cover lg:max-h-[700px] max-h-[200px]" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <img src="/images/carousel-9.jpg" alt="" className="w-full block mx-auto object-cover lg:max-h-[700px] max-h-[200px]" />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );

  // return (
  //   <div
  //     className="min-h-[993px] flex flex-col justify-center items-center"
  //     style={{
  //       background: "url(/images/explore-the-report.png)",
  //       objectFit: "cover",
  //     }}
  //   >
  //     <div
  //       className="lg:w-2/5 p-10"
  //       style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
  //     >
  //       <h1
  //         className={`${playfairDisplay.className} font-medium text-3xl md:text-5xl leading-tight mb-5`}
  //       >
  //         {t("Banner3.title")}
  //       </h1>
  //       <p className="text-xl font-light mb-8">{t("Banner3.description")}</p>
  //       <button
  //         type="button"
  //         className="text-white cursor-pointer font-bold text-lg py-3 pl-12 pr-[46px] bg-[#008481] shadow-md rounded flex flex-row items-start justify-start whitespace-nowrap transition-all"
  //       >
  //         {t("Banner3.register")}
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default ExploreTheReport;

"use client";

import useMediaQuery from "@/hooks/useMediaQuery";

// import Video from ;

export default function VideoPlayer() {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <div className="container py-10">
      <iframe
        className="block mx-auto"
        width={isDesktop ? '50%' : '100%'}
        height="400"
        src="https://www.youtube.com/embed/Fkt1iu4mSxA?si=_4mlEepqnMVawi77"
        title="AI Durian banner video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  return (
    <>
      <TopBar />
      <DesktopSearchBar />
      <DestopNavbar />
    </>
  );
}

const TopBar = () => {
  return <div className="h-[40px] bg-[#468448]" />;
};

const DesktopSearchBar = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between py-2">
        <div>
          <Link href={"/"}>
            <Image
              src={"/images/aidurian-logo.png"}
              alt="aidurian-logo"
              width="224"
              height="78"
            />
          </Link>
        </div>
        <div className="flex flex-row-reverse items-center gap-10">
          <div className="flex items-center gap-3">
            <button className="text-white cursor-pointer border-seagreen-200 border-[1px] border-solid py-[7px] pl-12 pr-[46px] bg-[#468448] shadow-md rounded flex flex-row items-start justify-start whitespace-nowrap hover:opacity-60 transition-all hover:border-[1px] hover:border-solid hover:box-border">
              Log in
            </button>
            <button className="cursor-pointer border-seagreen-200 border-[1px] border-solid py-[7px] pl-10 pr-[38px] bg-white shadow-md rounded flex flex-row items-start justify-start hover:opacity-60 transition-all hover:border-[1px] hover:border-solid hover:box-border">
              Register
            </button>
          </div>
          <div>
            <input
              className="border-[1px] w-[531px] border-solid border-black py-2 px-4 rounded-full"
              placeholder="Search Aidurian"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DestopNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center items-center gap-9 py-3 border-y-2 border-gray-200">
      <Link
        className={`link ${
          pathname === "/"
            ? "font-bold text-[#468448] cursor-default"
            : "hover:opacity-60 transition-all"
        }`}
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={`link ${
          pathname === "/membership"
            ? "font-bold text-[#468448] cursor-default"
            : "hover:opacity-60 transition-all"
        }`}
        href={"/membership"}
      >
        Membership
      </Link>
      <Link
        className={`link ${
          pathname === "/resources"
            ? "font-bold text-[#468448] cursor-default"
            : "hover:opacity-60 transition-all"
        }`}
        href={"/resources"}
      >
        Resources
      </Link>
      <Link
        className={`link ${
          pathname === "/news"
            ? "font-bold text-[#468448] cursor-default"
            : "hover:opacity-60 transition-all"
        }`}
        href={"/news"}
      >
        News
      </Link>
      <Link
        className={`link ${
          pathname === "/event"
            ? "font-bold text-[#468448] cursor-default"
            : "hover:opacity-60 transition-all"
        }`}
        href={"/event"}
      >
        Event
      </Link>
      <Link
        className={`link ${
          pathname === "/about"
            ? "font-bold text-[#468448] cursor-default"
            : "hover:opacity-60 transition-all"
        }`}
        href={"/about"}
      >
        About
      </Link>
      <Link
        className={`link ${
          pathname === "/business-solutions"
            ? "font-bold text-[#468448] cursor-default"
            : "hover:opacity-60 transition-all"
        }`}
        href={"/business-solutions"}
      >
        Business Solutions
      </Link>
      <Link
        className={`link ${
          pathname === "/local-sites"
            ? "font-bold text-[#468448] cursor-default"
            : "hover:opacity-60 transition-all"
        }`}
        href={"/local-sites"}
      >
        Local sites
      </Link>
    </nav>
  );
};

"use client";

import { Link } from "react-transition-progress/next";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Menu, X } from "lucide-react";
import { startTransition, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { useTranslations, useLocale } from "next-intl";
import { setUserLocale } from "@/services/locale";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <div>
      <TopBar />
      {isDesktop && (
        <>
          <DesktopSearchBar />
          <DestopNavbar />
        </>
      )}
      {!isDesktop && <MobileNavbar />}
    </div>
  );
}

const TopBar = () => {
  const locale = useLocale();

  const onChange = (value) => {
    const locale = value;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <div className="h-[40px] bg-[#008481] flex flex-row-reverse items-center">
      {/* <div className="container">
        <div className="flex flex-row-reverse items-center">
          <Select defaultValue={locale} onValueChange={onChange}>
            <SelectTrigger className="w-[100px] h-[30px] outline-none">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="cn">中国</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div> */}
    </div>
  );
};

const DesktopSearchBar = () => {
  const t = useTranslations();

  return (
    <div className="container">
      <div className="flex items-center justify-between py-2">
        <div>
          <Link href={"/"}>
            <img
              src={"/images/aidurian-logo.png"}
              alt="aidurian-logo"
              className="max-w-[224px]"
            />
          </Link>
        </div>
        <div className="flex flex-row-reverse items-center gap-10">
          <div className="flex items-center gap-3">
            <Link
              href={"/register"}
              className="flex-1 flex items-center justify-center text-white cursor-pointer border-[1px] border-solid py-[7px] pl-12 pr-[46px] bg-[#008481] shadow-md rounded whitespace-nowrap hover:opacity-60 transition-all hover:border-[1px] hover:border-solid hover:box-border"
            >
              {t("Navbar.register")}
            </Link>
            {/* <button className="cursor-pointer border-seagreen-200 border-[1px] border-solid py-[7px] pl-10 pr-[38px] bg-white shadow-md rounded flex flex-row items-start justify-start hover:opacity-60 transition-all hover:border-[1px] hover:border-solid hover:box-border">
              Register
            </button> */}
          </div>
          {/* <div>
            <input
              className="border-[1px] w-[531px] border-solid border-black py-2 px-4 rounded"
              placeholder={t("Navbar.search-box")}
              type="text"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

const DestopNavbar = () => {
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <nav className="flex justify-center items-center gap-9 py-3 border-y-2 border-gray-200">
      <Link
        className={`link ${
          pathname === "/"
            ? "font-bold text-[#008481] cursor-default border-b-[1px] border-[#008481] leading-none"
            : "hover:opacity-60 transition-all"
        }`}
        href={"/"}
      >
        {t("Navbar.home")}
      </Link>
      <Link
        className={`link ${
          pathname === "/membership"
            ? "font-bold text-[#008481] cursor-default border-b-[1px] border-[#008481] leading-none"
            : "hover:opacity-60 transition-all"
        }`}
        href={"/membership"}
      >
        {t("Navbar.membership")}
      </Link>
      {/* <Link
        className={`link ${
          pathname === "/news"
            ? "font-bold text-[#008481] cursor-default border-b-[1px] border-[#008481] leading-none"
            : "hover:opacity-60 transition-all"
        }`}
        href={"/news"}
      >
        {t("Navbar.news")}
      </Link> */}
      {/* <Link
        className={`link ${
          pathname === "/upcoming-event"
            ? "font-bold text-[#008481] cursor-default border-b-[1px] border-[#008481] leading-none"
            : "hover:opacity-60 transition-all"
        }`}
        href={"/upcoming-event"}
      >
        {t("Navbar.upcoming-event")}
      </Link> */}
      <Link
        className={`link ${
          pathname === "/get-involved"
            ? "font-bold text-[#008481] cursor-default border-b-[1px] border-[#008481] leading-none"
            : "hover:opacity-60 transition-all"
        }`}
        href={"/get-involved"}
      >
        {t("Navbar.get-involved")}
      </Link>
      {/* <Link
        className={`link ${
          pathname === "/local-sites"
            ? "font-bold text-[#008481] cursor-default border-b-[1px] border-[#008481] leading-none"
            : "hover:opacity-60 transition-all"
        }`}
        href={"/local-sites"}
      >
        {t("Navbar.local-sites")}
      </Link> */}
      <Link
        className={`link ${
          pathname === "/contact"
            ? "font-bold text-[#008481] cursor-default border-b-[1px] border-[#008481] leading-none"
            : "hover:opacity-60 transition-all"
        }`}
        href={"/contact"}
      >
        {t("Navbar.contact")}
      </Link>
    </nav>
  );
};

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <div className="relative py-3">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <img
              src={"/images/aidurian-logo.png"}
              alt="aidurian-logo"
              className="max-w-[200px]"
            />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={35} className="text-[#008481]" />
            ) : (
              <Menu size={35} className="text-[#008481]" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } mobile-nav p-2 absolute w-full bg-white shadow-2xl`}
      >
        {/* <div>
          <input
            className="border-[1px] w-full border-solid border-black py-1 px-4 rounded mb-4"
            placeholder="Search Aidurian"
            type="text"
          />
        </div> */}
        <nav className="flex flex-col justify-center items-center gap-4 mb-4">
          <Link
            className={`link ${
              pathname === "/"
                ? "font-bold text-[#008481] cursor-default border-b-[1px] border-[#008481] leading-none"
                : "hover:opacity-60 transition-all"
            }`}
            href={"/"}
            onClick={() => setIsOpen(false)}
          >
            {t("Navbar.home")}
          </Link>
          <Link
            className={`link ${
              pathname === "/membership"
                ? "font-bold text-[#008481] cursor-default border-b-[1px] border-[#008481] leading-none"
                : "hover:opacity-60 transition-all"
            }`}
            href={"/membership"}
            onClick={() => setIsOpen(false)}
          >
            {t("Navbar.membership")}
          </Link>
          {/* <Link
            className={`link ${
              pathname === "/news"
                ? "font-bold text-[#008481] cursor-default border-b-[1px] border-[#008481] leading-none"
                : "hover:opacity-60 transition-all"
            }`}
            href={"/news"}
            onClick={() => setIsOpen(false)}
          >
            {t("Navbar.news")}
          </Link> */}
          {/* <Link
            className={`link ${
              pathname === "/upcoming-event"
                ? "font-bold text-[#008481] cursor-default border-b-[1px] border-[#008481] leading-none"
                : "hover:opacity-60 transition-all"
            }`}
            href={"/upcoming-event"}
            onClick={() => setIsOpen(false)}
          >
            {t("Navbar.upcoming-event")}
          </Link> */}
          <Link
            className={`link ${
              pathname === "/get-involved"
                ? "font-bold text-[#008481] cursor-default border-b-[1px] border-[#008481] leading-none"
                : "hover:opacity-60 transition-all"
            }`}
            href={"/get-involved"}
            onClick={() => setIsOpen(false)}
          >
            {t("Navbar.get-involved")}
          </Link>
          {/* <Link
            className={`link ${
              pathname === "/local-sites"
                ? "font-bold text-[#008481] cursor-default border-b-[1px] border-[#008481] leading-none"
                : "hover:opacity-60 transition-all"
            }`}
            href={"/local-sites"}
            onClick={() => setIsOpen(false)}
          >
            {t("Navbar.local-sites")}
          </Link> */}
          <Link
            className={`link ${
              pathname === "/contact"
                ? "font-bold text-[#008481] cursor-default border-b-[1px] border-[#008481] leading-none"
                : "hover:opacity-60 transition-all"
            }`}
            href={"/contact"}
            onClick={() => setIsOpen(false)}
          >
            {t("Navbar.contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={"/register"}
            onClick={() => setIsOpen(false)}
            className="flex-1 flex items-center justify-center text-white cursor-pointer border-[1px] border-solid py-[7px] pl-12 pr-[46px] bg-[#008481] shadow-md rounded whitespace-nowrap hover:opacity-60 transition-all hover:border-[1px] hover:border-solid hover:box-border"
          >
            {t("Navbar.register")}
          </Link>
          {/* <button className="flex-1 cursor-pointer border-[1px] border-solid py-[7px] pl-10 pr-[38px] bg-white shadow-md rounded hover:opacity-60 transition-all hover:border-[1px] hover:border-solid hover:box-border">
            Register
          </button> */}
        </div>
      </div>
    </div>
  );
};

"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <>
      <div className="bg-black py-10 border-b-2 border-b-[#FEC216]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:m-0">
              <Link href={"/"}>
                <img
                  src={"/images/aidurian-footer-logo.png"}
                  className="max-w-[200px] mb-4 md:m-0"
                  alt=""
                />
              </Link>
              <div>
                <h1 className="text-white font-bold">{t("Footer.address1")}</h1>
                <p className="text-white">{t("Footer.address2")}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                className={`link ${
                  pathname === "/"
                    ? "font-bold text-white cursor-default leading-none border-b-[1px] border-white"
                    : "hover:opacity-60 transition-all text-white"
                }`}
                href={"/"}
              >
                {t("Navbar.home")}
              </Link>
              <Link
                className={`link ${
                  pathname === "/membership"
                    ? "font-bold text-white cursor-default leading-none border-b-[1px] border-white"
                    : "hover:opacity-60 transition-all text-white"
                }`}
                href={"/membership"}
              >
                {t("Navbar.membership")}
              </Link>
              <Link
                className={`link ${
                  pathname === "/news"
                    ? "font-bold text-white cursor-default leading-none border-b-[1px] border-white"
                    : "hover:opacity-60 transition-all text-white"
                }`}
                href={"/news"}
              >
                {t("Navbar.news")}
              </Link>
              <Link
                className={`link ${
                  pathname === "/upcoming-event"
                    ? "font-bold text-white cursor-default leading-none border-b-[1px] border-white"
                    : "hover:opacity-60 transition-all text-white"
                }`}
                href={"/upcoming-event"}
              >
                {t("Navbar.upcoming-event")}
              </Link>
              <Link
                className={`link ${
                  pathname === "/get-involved"
                    ? "font-bold text-white cursor-default leading-none border-b-[1px] border-white"
                    : "hover:opacity-60 transition-all text-white"
                }`}
                href={"/get-involved"}
              >
                {t("Navbar.get-involved")}
              </Link>
              <Link
                className={`link ${
                  pathname === "/local-sites"
                    ? "font-bold text-white cursor-default leading-none border-b-[1px] border-white"
                    : "hover:opacity-60 transition-all text-white"
                }`}
                href={"/local-sites"}
              >
                {t("Navbar.local-sites")}
              </Link>
              <Link
                className={`link ${
                  pathname === "/contact"
                    ? "font-bold text-white cursor-default leading-none border-b-[1px] border-white"
                    : "hover:opacity-60 transition-all text-white"
                }`}
                href={"/contact"}
              >
                {t("Navbar.contact")}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-4">
        <div className="container">
          <p className="text-center text-white">{t("Footer.description")}</p>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="flex flex-wrap items-center gap-4 mb-4">
              <Link href="/" className="text-white text-sm font-medium">
                {t("Footer.about")}
              </Link>
              <Link href="/" className="text-white text-sm font-medium">
                {t("Footer.term")}
              </Link>
              <Link href="/" className="text-white text-sm font-medium">
                {t("Footer.accessibility")}
              </Link>
              <Link href="/" className="text-white text-sm font-medium">
                {t("Footer.privacy")}
              </Link>
              <Link href="/" className="text-white text-sm font-medium">
                {t("Footer.contact")}
              </Link>
              <Link href="/" className="text-white text-sm font-medium">
                {t("Footer.help")}
              </Link>
              <Link href="/" className="text-white text-sm font-medium">
                {t("Footer.site-map")}
              </Link>
            </div> */
}

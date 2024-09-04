import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations();

  return (
    <div className="bg-[#282937] py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-sm font-light text-white">
              {t("Footer.description")}
            </p>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-4 mb-4">
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
            </div>
            <h1 className="text-white text-sm font-medium">
              {t("Footer.watermark")}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

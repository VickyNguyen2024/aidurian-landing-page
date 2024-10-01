import { Roboto } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import LayoutWrapper from "@/components/LayoutWrapper";
import { ProgressBar, ProgressBarProvider } from "react-transition-progress";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Durian | International Durian Association",
  description:
    "The International Durian Association (IDA) is a global non-profit organization committed to promoting sustainable development and exceptional quality in the durian industry. With a mission to connect producers, exporters, and consumers worldwide, IDA creates a robust platform for collaboration, aiming to enhance product standards and add value for all partners involved.",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <NextIntlClientProvider messages={messages}>
          <ProgressBarProvider>
            <ProgressBar className="fixed h-2 shadow-lg shadow-sky-500/20 bg-[#FCC009] top-0" />
            <LayoutWrapper>
              {/* I.e. using Tailwind CSS to show the progress bar with custom styling */}
              {children}
            </LayoutWrapper>
          </ProgressBarProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

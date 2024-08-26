import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#282937] py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-sm font-light text-white">
              This site is sponsored by the International Durian Association,
              the global representative organization for the durian industry,
              committed to promoting innovation, ensuring quality, and fostering
              sustainable development. The Association was founded by leading
              experts and reputable organizations within the durian industry.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Link href="/" className="text-white text-sm font-medium">
                About
              </Link>
              <Link href="/" className="text-white text-sm font-medium">
                Terms & Conditions
              </Link>
              <Link href="/" className="text-white text-sm font-medium">
                Accessibility
              </Link>
              <Link href="/" className="text-white text-sm font-medium">
                Privacy Policy
              </Link>
              <Link href="/" className="text-white text-sm font-medium">
                Contact
              </Link>
              <Link href="/" className="text-white text-sm font-medium">
                Help
              </Link>
              <Link href="/" className="text-white text-sm font-medium">
                Site Map
              </Link>
            </div>
            <h1 className="text-white text-sm font-medium">
              CA Do Not Sell or Share My Personal Information
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

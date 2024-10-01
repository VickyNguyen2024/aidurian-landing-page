import { Link } from "react-transition-progress/next";

export default function NotFound() {
  return (
    <div className="container py-32">
      <h1 className="font-bold text-4xl uppercase text-center mb-6">
        404 - Page not found
      </h1>
      <p className="text-center font-medium mb-6">
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <div className="flex items-center justify-center">
        <Link
          href={"/"}
          className="text-center inline-block mx-auto text-white cursor-pointer border-seagreen-200 border-[1px] border-solid py-[7px] pl-12 pr-[46px] bg-[#008481] shadow-md rounded hover:opacity-60 transition-all hover:border-[1px] hover:border-solid hover:box-border"
        >
          Go to homepage
        </Link>
      </div>
    </div>
  );
}

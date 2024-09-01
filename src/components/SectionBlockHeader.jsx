export default function SectionBlockHeader({ url, title, height }) {
  return (
    <div
      className={`section-block-header min-h-[200px] md:min-h-[${height}px] mb-20`}
      style={{ backgroundImage: url }}
    >
      <h1 className="text-3xl font-medium text-white md:text-6xl text-center">
        {title}
      </h1>
    </div>
  );
}

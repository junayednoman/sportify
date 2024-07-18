const SectionHeader = ({
  title,
  align,
}: {
  title: string;
  align?: CanvasTextAlign | undefined;
}) => {
  return (
    <div
      style={{ textAlign: align! }}
      className="mb-8 md:mb-10 md:text-3xl text-2xl font-semibold"
    >
      <h3
        className={`${
          align !== "center" && "section-heading"
        } relative inline-block capitalize`}
      >
        {title}
      </h3>
    </div>
  );
};

export default SectionHeader;

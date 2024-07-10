const SectionHeader = ({ title, align }: { title: string; align?: string }) => {
  return (
    <div
      style={{ textAlign: align ? align : "" }}
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

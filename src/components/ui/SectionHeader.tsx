const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="mb-8 md:mb-10 md:text-3xl text-2xl font-semibold">
      <h3 className=" section-heading relative inline-block">{title}</h3>
    </div>
  );
};

export default SectionHeader;

import { ReactNode } from "react";

const SectionContainer = ({ children }: { children: ReactNode }) => {
  return <div className="lg:my-16 md:my-12 my-8">{children}</div>;
};

export default SectionContainer;

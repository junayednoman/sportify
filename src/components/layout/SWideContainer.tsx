import { ReactNode } from "react";

const SWideContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="xl:mx-8 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3">
      {children}
    </div>
  );
};

export default SWideContainer;

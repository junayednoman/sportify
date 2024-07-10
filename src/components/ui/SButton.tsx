import { ReactNode } from "react";
import { Button } from "./button";

const SButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button className="bg-primaryColor px-7 py-6 lg:text-base hover:bg-[#76a624] ">
      {children}
    </Button>
  );
};

export default SButton;

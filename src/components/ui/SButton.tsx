import { ReactNode } from "react";
import { Button } from "./button";

const SButton = ({
  children,
  disable,
}: {
  children: ReactNode;
  disable?: boolean;
}) => {
  return (
    <Button
      disabled={disable}
      className="bg-primaryColor px-7 py-6 lg:text-base hover:bg-[#76a624] "
    >
      {children}
    </Button>
  );
};

export default SButton;

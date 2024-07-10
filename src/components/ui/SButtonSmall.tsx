import { ReactNode } from "react";
import { Button } from "./button";

const SButtonSmall = ({
  children,
  fullWidth,
}: {
  children: ReactNode;
  fullWidth?: boolean;
}) => {
  return (
    <Button
      style={{ width: fullWidth ? "100%" : "" }}
      className="bg-primaryColor px-5 py-4 hover:bg-blackColor "
    >
      {children}
    </Button>
  );
};

export default SButtonSmall;

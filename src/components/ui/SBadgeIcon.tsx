import { ReactNode } from "react";

const SBadgeIcon = ({ value, icon }: { value: number; icon: ReactNode }) => {
  return (
    <div className="relative">
      {value > 0 && (
        <p className=" text-white bg-primaryColor rounded-full w-[18px] h-[18px] text-[13px] flex justify-center items-center font-bold absolute top-[-7px] right-[-8px]">
          {value}
        </p>
      )}
      <div>{icon}</div>
    </div>
  );
};

export default SBadgeIcon;

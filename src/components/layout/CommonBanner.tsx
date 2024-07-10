import SContainer from "./SContainer";

const CommonBanner = ({ title }: { title: string }) => {
  return (
    <div className="lg:py-32 md:py-24 py-20 bg-lightWhiteColor">
      <SContainer>
        <h4 className="text-center font-bold lg:text-7xl md:text-6xl text-5xl">{title}</h4>
      </SContainer>
    </div>
  );
};

export default CommonBanner;

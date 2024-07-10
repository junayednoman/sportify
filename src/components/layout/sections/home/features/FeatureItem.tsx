type TFeatureItemProps = {
  image: string;
  heading: string;
  text: string;
};

const FeatureItem = ({ image, heading, text }: TFeatureItemProps) => {
  return (
    <div className="xl:w-[23%] lg:w-[30%] md:w-[45%] sm:w-[48%] w-[80%] h-auto">
      <div className="flex items-center gap-4 bg-lightGreenColor px-8 py-7 rounded-md">
        <img src={image} alt="" />
        <div>
          <h4 className="uppercase font-semibold">{heading}</h4>
          <p className="text-sm text-gray-500">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;

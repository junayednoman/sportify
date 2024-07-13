import loadingImg from "@/assets/images/loading.svg";

const SLoading = () => {
  return (
    <div className="h-full w-full justify-center items-center mt-14">
      <img className="mx-auto w-[130px]" src={loadingImg} alt="" />
    </div>
  );
};

export default SLoading;

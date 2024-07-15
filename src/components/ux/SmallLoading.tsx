import loadingImg from "@/assets/images/small-loading.svg";

const SmallLoading = ({ width }: { width: number }) => {
  return (
    <div className="justify-center items-center">
      <img
        width={width ? width : 40}
        className="mx-auto"
        src={loadingImg}
        alt=""
      />
    </div>
  );
};

export default SmallLoading;

const shimmerPlaceholder = "bg-gray-100 animate-pulse";
const shimmerText = "h-4 w-3/4 mb-2 bg-gray-300 animate-linear";
export const Shimmer = () => {


  return (
    <div className={`${shimmerPlaceholder} w-64 h-80 rounded-xl mb-10`}>
      <div
        className={`${shimmerPlaceholder} w-60 h-40 ml-2 mt- shadow-lg rounded-xl`}
      ></div>

      <div className="px-5 py-2">
        <div className={`${shimmerText} mt-6`}></div>
        <div className={`${shimmerText}`}></div>
        <div className={`${shimmerText}`}></div>
      </div>
    </div>
  );
};

export const Shimmerr = () => {
  const shimmerPlaceholder = "bg-gray-100 animate-pulse";

  return (
    <div className={`${shimmerPlaceholder} w-32 h-32 rounded-full `}></div>
  );
};

export const ShimmerResInfo = () => {
  <div className=" w-6/12 mx-auto">
    <div className="my-6 p-4 flex flex-col bg-white shadow-md">
      <div className={`${shimmerText} mt-6`}></div>
      <div className={`${shimmerText}`}></div>
    </div>
  </div>;
};

const Shimmer = () => {
  return (
      <div className="flex flex-wrap justify-evenly mt-4">
      <div data-testid="resCard" className="p-4 z-0">
      <div className="w-64 h-80  rounded-xl transform transition duration-250 hover:scale-95">
        <p className="absolute text-center pt-32 text-white font-bold text-xl pl-4">
          {/* {aggregatedDiscountInfoV3?.header}{" "} */}
          {/* {aggregatedDiscountInfoV3?.subHeader} */}
        </p>
        
        <img
          className="w-60 h-40 ml-2 mt- shadow-lg rounded-xl"
          // src={RES_ITEMS_IMAGE + resData.info.cloudinaryImageId}
          alt=""
        />
        <div className="px-5 py-2">
          {/* <h1 className="font-bold text-lg">{name}</h1> */}
          <h1 className="text-base h-max w-max py-1 rounded-md font-semibold">
            {/* {avgRating}⭐{" • "}
            {deliveryTime} mins. */}
          </h1>
          {/* <h1 className="">{slicedCuisines.join(", ")}</h1> */}
          {/* <h1 className="">{loggedInUser} </h1> */}
        </div>
      </div>
    </div>
      </div>
  );
};

export default Shimmer;

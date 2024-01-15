import React from "react";

const SubFooter = () => {
  return (
    <div className="w-full bg-[#f0f0f5]">
  
      <div className="flex gap-x-4 items-center mx-auto w-6/12 h-24">
        <h1 className="grow text-2xl font-bold text-[#3D4047]">
          For better experience,download the Swiggy app now
        </h1>
        <div className="flex gap-x-6">
          <img
            className="w-48 h-16"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            }
            alt=""
          />
          <img
            className="w-48 h-16"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            }
            alt=""
          />
        </div>
      </div>
          
    </div>
  
  );
};

export default SubFooter;

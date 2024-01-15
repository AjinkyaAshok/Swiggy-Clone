import { useEffect, useState } from "react";
import { RES_MENU } from "./constants";
import { useParams } from "react-router-dom";

const useRestaurantMenu = (resID) => {

  const [resInfo, setResInfo] = useState(null);
      useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU + resID);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;

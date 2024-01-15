import RestrauntCard, { withOfferLabel } from "./RestrauntCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";
import { RES_LIST } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofRestraunts, setListofRestraunt] = useState([]);
  const [filteredRestraunts, setFilteredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantOfferCard = withOfferLabel(RestrauntCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST);
    const json = await data.json();
    // console.log(json);

    setListofRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div>
        <h1>Looks like you are not online</h1>
      </div>
    );
  const { loggedInUser, setUserName } = useContext(UserContext);

  return listofRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body my-4">
      <div className="flex justify-between">
        <button
          className="p-2 border font-semibold mx-1 rounded-md bg-orange-200 "
          onClick={() => {
            const filteredList = listofRestraunts.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestraunt(filteredList);
          }}
        >
          Top Rated
        </button>
        <div>
          <label htmlFor="" className="font-semibold">UserName: </label>

          <input
            className="border rounded-md hover:bg-orange-50 p-1"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="search-container">
          <input
            className="border rounded-md hover:bg-orange-50 p-1"
            data-testid="searchInput"
            type="text"
            placeholder="search for favourite"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="p-2 border mx-1 font-semibold rounded-md bg-orange-200"
            onClick={() => {
              const filter = listofRestraunts.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestraunt(filter);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div  className="flex flex-wrap justify-center">
        {filteredRestraunts.map((restraunt) => (
          <Link key={restraunt.info.id} to={"/restaurant/" + restraunt.info.id}>
            {restraunt.info.isOpen ? (
              <RestaurantOfferCard resData={restraunt} />
            ) : (
              <RestrauntCard resData={restraunt} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

import RestrauntCard, { withOfferLabel } from "./RestrauntCard";
import { useState, useEffect, useContext, useRef } from "react";
import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";
import { RES_ITEMS_IMAGE, RES_LIST } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofRestraunts, setListofRestraunt] = useState([]);
  const [filteredRestraunts, setFilteredRestraunt] = useState([]);
  const [carousalList, setCarousalList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantOfferCard = withOfferLabel(RestrauntCard);
  const navRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = (scrollAmount) => {
    const container = scrollContainerRef.current;
    if (container) {
      const newScrollPosition = scrollPosition + scrollAmount;
      container.scrollLeft = newScrollPosition;
      setScrollPosition(newScrollPosition);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST);
    const json = await data.json();

    setListofRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setCarousalList(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    // console.log(carousal[2].id, "carsousal data");
  };
  const onlineStatus = useOnlineStatus();

  const handleNav = (direction) => {
    if (direction === 'left') {
      navRef ? (navRef.current.scrollLeft -+ 200) : null;
    } else {
      navRef ? (navRef.current.scrollLeft += 200) : null;
    }
  }

  if (onlineStatus === false)
    return (
      <div>
        <h1>Looks like you are not online</h1>
      </div>
    );
  // const { loggedInUser, setUserName } = useContext(UserContext);

  return listofRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="h-full mt-10 w-10/12 mx-auto">
      <div className="flex justify-between mx-12">
        <button
          className="border font-medium text-sm p-1 rounded-md bg-[#f4e2ac]"
          onClick={() => {
            const filteredList = listofRestraunts.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestraunt(filteredList);
          }}
        >
          Top Rated
        </button>

        {/* ---------------------------useContext------------------- */}

        {/* <div>
          <label htmlFor="" className="font-semibold">UserName: </label>

          <input
            className="border rounded-md hover:bg-orange-50 p-1"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div> */}

        {/* ---------------------------useContext------------------- */}
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
      {/* <div>

      <button onClick={() => handleNav('left')}>left</button>
      </div> */}
      <div className="mt-4 mx-10 flex justify-end">
        <button
          className="px-4 py-2 bg-gray-200 text-white rounded-full"
          onClick={() => handleScroll(-100)} // Adjust scroll amount based on your preference
        >
          ‹
        </button>
        <button
          className="px-4 py-2 bg-gray-200 text-white rounded-full"
          onClick={() => handleScroll(100)} // Adjust scroll amount based on your preference
        >
        ›
        </button>
      </div>
      <div className="m-10 flex overflow-x-auto space-x-4 no-scrollbar scroll-smooth" ref={scrollContainerRef}>

        {carousalList.map((card, index) => (
          <img
            key={index}
            className="w-64 h-40 object-cover"
            src={RES_ITEMS_IMAGE + card.imageId}
            alt={`Image ${index}`}
          />
        ))}
      </div>
      {/* <div>

      <button onClick={() => handleNav('right')}>right</button>
      </div> */}

      <h1 className="font-bold text-2xl px-10 pt-10">
        Top restaurant chains from your city
      </h1>

      <div className="flex flex-wrap justify-evenly mt-4 ">
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

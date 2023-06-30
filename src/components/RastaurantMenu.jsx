import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CON_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${resId}`
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

  if (!restaurant) {
    return <Shimmer />;
  }
  return (
    <div className="menu">
      <h1>Restaurant id :{resId}</h1>
      <h2>{restaurant.name}</h2>
      <img src={IMG_CON_URL + restaurant.cloudinaryImageId} alt="" />
      <h3>{restaurant.area}</h3>
      <h3>{restaurant.city}</h3>
      <h3>{restaurant.avgRating}</h3>
      <h3>{restaurant.costForTwo}</h3>
      {/* //task */}
      <h1>Menu</h1>
      <div>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

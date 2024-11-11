import { GiSelfLove } from "react-icons/gi";
import React, { useEffect, useState } from "react";
import {  getStoreWishlist } from "../components/utility/addtoCard";


const CartWishlist = () => {
    const [addWish, setAddWish] = useState([]);
  
  
  useEffect(() => {
    const storeWishList = getStoreWishlist();
    const storeWishListInt = storeWishList.map((id) => id.toString());
    setAddWish(storeWishListInt);
  }, []);


  
  return (
    <div className="flex items-center gap-2">
        <GiSelfLove /> 
      <div className="text-xl bg-white shadow rounded-full ">
        
        <span className="ml-2">{addWish.length} </span> 
        
      </div>
    </div>
  );
};

export default CartWishlist;

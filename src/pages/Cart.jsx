import { FaCartShopping } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { getStoreAddToCart,  } from "../components/utility/addtoCard";


const CartWishlist = () => {
  const [addCard, setAddCard] = useState([]);
   
  useEffect(() => {
    const storeAddToCard = getStoreAddToCart();
    const storeAddToCardInt = storeAddToCard.map((id) => id.toString());
    setAddCard(storeAddToCardInt);
  }, []);
  
 
  

  return (
    <div className="flex items-center gap-2">
        <FaCartShopping /> 
      <div className="text-xl bg-white shadow p-2 rounded-full">        
        <span >{addCard.length}</span> 
      </div>

    </div>
  );
};

export default CartWishlist;

import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_title, product_image, price, product_id } = product;

  return (
   <div>
     <div className="flex justify-center">
      <div className="card bg-base-100 shadow-lg rounded-lg w-72 h-full">
        {/* Image Container */}
        <figure className="px-4 pt-4">
          <img
            src={product_image}
            alt={product_title}
            className="rounded-md shadow-md w-full h-48 object-cover"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body text-start">
          <h2 className="card-title text-lg font-semibold">{product_title}</h2>
          <p className="text-gray-700 text-base">Price: ${price.toFixed(2)}</p>
          <div className="card-actions justify-start mt-4">
            <Link to={`/product/${product_id}`}>
              <button className="btn bg-[#9538E2] text-white w-full">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Product;

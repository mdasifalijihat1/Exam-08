import { GiSelfLove } from "react-icons/gi";
import { useLoaderData, useParams } from "react-router-dom";
import { addToCart, addToWishlist } from "../utility/addtoCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const ProductDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const product = data.find((product) => product.product_id === product_id);

  if (!product) {
    return <p className="text-center text-xl mt-10">Product not found</p>;
  }

  const {
    product_title,
    price,
    availability,
    description,
    Specification,
    rating,
    product_image,
  } = product;

  const handleAddToCart = (id) => {
    addToCart(id);
    toast.success(`${product_title} has been added to your cart!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  const handleAddtoWishlist = (id) => {
    addToWishlist(id);
    toast.success(`${product_title} has been added to your wishlist!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  return (
    <div className="pb-10">
      {/* banner */}
      <div className="h-48 sm:h-60 md:h-72 bg-[#9538E2] text-white flex flex-col justify-center items-center px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Product Details</h2>
        <p className="text-sm sm:text-base md:text-lg mt-2 max-w-xs sm:max-w-md">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* product details */}
      <div className="w-full max-w-4xl mx-auto mt-[-60px] px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-4 shadow-lg flex flex-col md:flex-row gap-6">
          <img
            src={product_image}
            className="w-full h-full max-w-xs mx-auto rounded-lg shadow-md"
            alt={product_title}
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-xl md:text-2xl font-bold">{product_title}</h1>
            <p className="text-lg font-semibold">Price: ${price}</p>
            <p
              className={`text-lg rounded w-24 text-center p-1 ${
                availability === "In Stock" ? "text-green-600" : "text-green-600"
              } font-semibold`}
            >
              {availability === "In Stock" ? "Out of Stock" : "In Stock"}
            </p>
            <p>{description}</p>
            {Specification && Array.isArray(Specification) ? (
              <div>
                <h3 className="font-bold">Specifications:</h3>
                <ul className="list-disc list-inside text-sm">
                  {Specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>Specification: {Specification}</p>
            )}
           <p className="text-xl font-semibold">Rating ⭐</p>
            
           <div className="flex items-center gap-4 my-4">             
              <div className="rating">
                 {[...Array(5)].map((_, index) => (
                  <input
                    key={index}
                    type="radio"
                    name="rating"
                    className={`mask mask-star-2 ${
                      index < rating ? "bg-orange-400" : "bg-gray-300"
                    }`}
                    defaultChecked={index === rating - 1}
                    disabled
                  />
                ))}
              </div>
              <span>{rating}</span>{" "}             
            </div>
          
            {/* Responsive Button Section */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                onClick={() => handleAddToCart(product_id)}
                className="btn bg-[#9538E2] text-white px-4 py-2 rounded w-full sm:w-auto"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleAddtoWishlist(product_id)}
                className="bg-white p-4 rounded-full border flex items-center justify-center btn"
              >
                <GiSelfLove className="text-xl" />
              </button>
            </div>

          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
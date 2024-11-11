import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getStoreAddToCart,
  getStoreWishlist,
  handlePurchase,
} from "../components/utility/addtoCard";
import Product from "../components/Product/Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash } from "react-icons/fa";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [addCard, setAddCard] = useState([]);
  const [addWish, setAddWish] = useState([]);
  const [activeTab, setActiveTab] = useState("cart");
  const [sortedByPrice, setSortedByPrice] = useState(false);
  const allProduct = useLoaderData();

  useEffect(() => {
    const storeAddToCard = getStoreAddToCart();
    setAddCard(storeAddToCard.map((id) => id.toString()));
  }, []);

  useEffect(() => {
    const storeWishList = getStoreWishlist();
    setAddWish(storeWishList.map((id) => id.toString()));
  }, []);
// cart products 
  const cartProducts = allProduct
    .filter((product) => addCard.includes(product.product_id.toString()))
    .sort((a, b) => (sortedByPrice ? a.price - b.price : b.price - a.price));

  const wishlistProducts = allProduct.filter((product) =>
    addWish.includes(product.product_id.toString())
  );

  const totalCost = cartProducts.reduce(
    (sum, product) => sum + (product.price || 0),
    0
  );
// price toggle
  const toggleSortByPrice = () => {
    setSortedByPrice(!sortedByPrice);
  };
// removed cart 
  const handleRemoveFromCart = (productId) => {
    const updatedCart = addCard.filter((id) => id !== productId.toString());
    setAddCard(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.info("Product removed from cart");
  };
// removed wishlist 
  const handleRemoveFromWishlist = (productId) => {
    const updatedWishlist = addWish.filter((id) => id !== productId.toString());
    setAddWish(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    toast.info("Product removed from wishlist");
  };

// purchase 

  const handlePurchaseClick = () => {
    if (cartProducts.length === 0) {
      toast.warn("Your cart is empty. Add products to proceed.");
      return;
    }
  const purchaseHistory = JSON.parse(localStorage.getItem("purchaseHistory")) || [];
  const newPurchase = {
    items: cartProducts.map((product) => product.product_id.toString()),
    totalAmount: totalCost,
    date: new Date().toISOString(), 
  };
  purchaseHistory.push(newPurchase);
  localStorage.setItem("purchaseHistory", JSON.stringify(purchaseHistory));
    handlePurchase();
    toast.success(`Purchase Successful! Total: $${totalCost.toFixed(2)}`);
    setAddCard([]);
    localStorage.removeItem("cart");
  };

  return (
    <div>
      <Helmet>
        <title> gadget | dashboard </title>
      </Helmet>
      {/* banner section  */}
      <div className="w-full bg-[#9538E2] text-white flex flex-col items-center py-8 px-4 text-center md:py-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Dashboard</h2>
        <p className="text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md lg:max-w-2xl mx-auto leading-relaxed md:leading-loose">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        {/* card and wishlist button */}
        <div className="flex gap-4 mt-6">
          <button
            className={`p-2 md:px-4 md:py-2 rounded ${
              activeTab === "cart" ? "bg-green-500 " : "bg-[#9538E2] border"
            } text-white`}
            onClick={() => setActiveTab("cart")}
          >
            Cart
          </button>
          <button
            className={`p-2 md:px-4 md:py-2 rounded ${
              activeTab === "wishlist" ? "bg-green-500" : "bg-[#9538E2] border"
            } text-white`}
            onClick={() => setActiveTab("wishlist")}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* products show  */}
      <div className="p-4">
        {activeTab === "cart" && (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <h2 className="text-3xl font-bold">Cart</h2>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <h2 className="text-lg font-semibold">
                  Total Cost: ${totalCost.toFixed(2)}
                </h2>
                <button
                  onClick={toggleSortByPrice}
                  className="bg-white border text-[#9538E2] px-4 py-2 rounded flex gap-2"
                >
                  Sort by Price {sortedByPrice ? <FaArrowDownShortWide /> : <FaArrowUpWideShort />}
                </button>
                <button
                  onClick={handlePurchaseClick}
                  className="bg-[#9538E2] text-white px-4 py-2 rounded"
                >
                  Purchase
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {cartProducts.length > 0 ? (
                cartProducts.map((product) => (
                  <div key={product.product_id} className="relative">
                    <Product product={product} />
                    <button
                      onClick={() => handleRemoveFromCart(product.product_id)}
                      className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded-full"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-4xl font-bold">No products in cart.</p>
              )}
            </div>
          </div>
        )}

        {activeTab === "wishlist" && (
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Wishlist</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {wishlistProducts.length > 0 ? (
                wishlistProducts.map((product) => (
                  <div key={product.product_id} className="relative">
                    <Product product={product} />
                    <button
                      onClick={() => handleRemoveFromWishlist(product.product_id)}
                      className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded-full"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-4xl font-bold">No products in wishlist.</p>
              )}
            </div>
          </div>
        )}
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Dashboard;

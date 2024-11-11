import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const PurchaseDetails = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const allProduct = useLoaderData();

  // allProduct loaded
  if (!allProduct || !Array.isArray(allProduct)) {
    console.error('Product data is missing or invalid:', allProduct);
    return <p>Loading product...</p>;
  }

  useEffect(() => {
    try {
      const history = JSON.parse(localStorage.getItem("purchaseHistory")) || [];
      setPurchaseHistory(history);
      console.log('Purchase history:', history);
    } catch (error) {
      console.error('Error reading purchase history from localStorage:', error);
    }
  }, []);

  const getPurchaseDetails = (purchase) => {
    if (!purchase.items || !Array.isArray(purchase.items)) {
      console.warn('Invalid purchase items:', purchase);
      return[];
    }

    return purchase.items.map((id) => {
      const product = allProduct.find((p) => p.product_id.toString() === id);
      return product ? {
        ...product,
        purchaseDate: purchase.date,
      } : null;
    }).filter((product) => product !== null);
  };

  return (
    <div>
      <Helmet> <title>purchase | Details</title>  </Helmet>
      <div className="px-4 md:px-8 py-6">
      <h2 className="text-2xl font-bold mb-4">Purchase Details</h2>
      {purchaseHistory.length === 0 ? (
        <p>No purchase history available.</p>
      ) : (
        purchaseHistory.map((purchase, index) => {
          const purchaseDetails = getPurchaseDetails(purchase);
          const totalAmount = purchase.totalPrice || 0;

          return (
            <div key={index} className="purchase-summary mb-6 p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Purchase {index + 1}</h3>
              <p className="text-gray-600">Date: {purchase.date ? new Date(purchase.date).toLocaleDateString() : 'N/A'}</p>
              <p className="text-gray-600">Total Amount: ${purchase.totalPrice ? purchase.totalPrice.toFixed(2) : 'N/A'}</p>
              <div className="product-list mt-4">
                {purchaseDetails.length === 0 ? (
                  <p>No products found for this purchase.</p>
                ) : (
                  purchaseDetails.map((product, idx) => (
                    <div key={idx} className="product-item flex items-center gap-4 mb-4">
                      <img 
                        src={product.product_image} 
                        alt={product.product_title} 
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{product.product_title}</h4>
                        <p className="text-gray-700">Price: ${product.price}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
    </div>
  );
};

export default PurchaseDetails;

import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);
    const [selectCategory, setSelectCategory] = useState('all');

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilterProduct(data); 
            });
    }, []);

    const handleCategoryClick = (category) => {
        setSelectCategory(category);
        if (category === 'all') {
            setFilterProduct(products);
        } else {
            const filtered = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
            setFilterProduct(filtered);
        }
    };

    return (
        <div className="pb-20 px-4 md:px-8 lg:px-16">
            {/* heading */}
            <div className="p-8 md:p-16 lg:p-20 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Explore Cutting-Edge Gadgets</h2>
            </div>
            
            <div className="md:flex gap-6">
                {/* category buttons */}
                <div className="grid w-full md:w-1/4 p-4 shadow rounded-lg h-auto md:h-[556px] mb-6 md:mb-0">
                    <button
                        onClick={() => handleCategoryClick('all')}
                        className={`btn mb-2 ${selectCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white transition duration-300`}
                    >
                        All Products
                    </button>
                    <button
                        onClick={() => handleCategoryClick('laptop')}
                        className={`btn mb-2 ${selectCategory === 'laptop' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white transition duration-300`}
                    >
                        Laptop
                    </button>
                    <button
                        onClick={() => handleCategoryClick('phone')}
                        className={`btn mb-2 ${selectCategory === 'phone' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white transition duration-300`}
                    >
                        Phones
                    </button>
                    <button
                        onClick={() => handleCategoryClick('Wearable Accessories')}
                        className={`btn mb-2 ${selectCategory === 'Wearable Accessories' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white transition duration-300`}
                    >
                        Accessories
                    </button>
                    <button
                        onClick={() => handleCategoryClick('smart watches')}
                        className={`btn mb-2 ${selectCategory === 'smart watches' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white transition duration-300`}
                    >
                        Smart Watches
                    </button>
                    <button
                        onClick={() => handleCategoryClick('MackBook')}
                        className={`btn mb-2 ${selectCategory === 'MackBook' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white transition duration-300`}
                    >
                        MacBook
                    </button>
                    <button
                        onClick={() => handleCategoryClick('Smartphones')}
                        className={`btn ${selectCategory === 'Smartphones' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white transition duration-300`}
                    >
                        iPhone
                    </button>
                </div>
                
                {/* filtered products */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-3/4">
                    {filterProduct.length > 0 ? (
                        filterProduct.map((product) => (
                            <Product key={product.product_id} product={product} />
                        ))
                    ) : (
                        <p className="text-center items-center font-bold text-2xl md:text-4xl col-span-full text-black">
                            No products available in this category.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;


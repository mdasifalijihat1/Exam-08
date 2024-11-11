import React from "react";

const Banner = () => {
  return (
    <div>
  <div className="hero bg-[#9538E2] min-h-[694px] rounded-3xl md:min-h-[500px] lg:min-h-[600px] xl:min-h-[694px]">
    <div className="hero-content text-center px-4 md:px-8 lg:px-12">
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          Upgrade Your Tech Accessorize with <br className="hidden md:block" /> Gadget Heaven Accessories
        </h2>
        <p className="py-6 text-white text-sm md:text-base lg:text-lg">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to <br className="hidden md:block" /> the coolest accessories, we have it all!
        </p>
        <button className="btn font-bold text-lg md:text-xl">Shop Now</button>
      </div>
    </div>
  </div>

  <div className="mx-auto w-full md:w-[90%] lg:w-[80%] xl:w-[1110px] h-auto md:h-[400px] lg:h-[500px] xl:h-[611px] -mt-20 md:-mt-24 lg:-mt-36 shadow-rose-10 shadow rounded-3xl flex items-center justify-center border">
    <span>
      <img className="w-[1062px] h-[563px] object-cover rounded-3xl p-4" src='/images/banners.jpg' alt="Loading images" />
    </span>
  </div>
</div>

  );
};

export default Banner;

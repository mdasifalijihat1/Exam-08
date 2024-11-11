import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content p-8 md:p-10">
      {/*  Header */}
      <div className="flex flex-col items-center text-center gap-2 mb-8">
        <h3 className="font-bold text-2xl md:text-3xl">Gadget Heaven</h3>
        <p className="text-sm md:text-base max-w-xs md:max-w-md">
          Leading the way in cutting-edge technology and innovation
        </p>
      </div>

      {/* Navigation Links */}
      <div className="grid gap-8 md:grid-cols-3 ">
        {/* Services */}
        <nav className="text-center md:text-left">
          <h6 className="footer-title font-semibold mb-2">Services</h6>
          <a className="link link-hover block mb-1">Product Support</a>
          <a className="link link-hover block mb-1">Order Tracking</a>
          <a className="link link-hover block mb-1">Shipping & Delivery</a>
          <a className="link link-hover block">Returns</a>
        </nav>

        {/* Company */}
        <nav className="text-center md:text-left">
          <h6 className="footer-title font-semibold mb-2">Company</h6>
          <a className="link link-hover block mb-1">About us</a>
          <a className="link link-hover block mb-1">Careers</a>
          <a className="link link-hover block">Contact</a>
        </nav>

        {/* Legal */}
        <nav className="text-center md:text-left">
          <h6 className="footer-title font-semibold mb-2">Legal</h6>
          <a className="link link-hover block mb-1">Terms of use</a>
          <a className="link link-hover block mb-1">Privacy policy</a>
          <a className="link link-hover block">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
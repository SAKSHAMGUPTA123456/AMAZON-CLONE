import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import k from "./assest/download.png";
import icon from "./assest/download (2).png";
import admin from "./assest/admin.jpg";
import Grocery from "./assest/grocery.png";
import Search from "./assest/search icon.png";

export const Header = ({ setSidebarOpen, sidebarOpen }) => {
  const handleClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <motion.div
        initial={{ x: -350 }}
        animate={{ x: sidebarOpen ? 0 : -350 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-28 left-0 h-full w-[350px] bg-black shadow-lg z-[1000]"
      >
        <div style={{ backgroundColor: "#232f3e", padding: "10px" }}>
          <div style={{ color: "white" }}>Browse</div>
          <div style={{ fontSize: "20px", color: "white" }}>Amazon</div>
        </div>

        {/* Sidebar Content */}
        <div className="flex justify-between">
          <div className="bg-black w-full">
            {[
              "Trending",
              "Bestsellers",
              "New Releases",
              "Movers and Shakers",
              "Mobiles",
              "Computers",
              "Books",
              "Amazon Fashion",
            ].map((item) => (
              <div key={item} className="text-white p-3 border-b">
                {item}
              </div>
            ))}
          </div>
          {/* Close Button */}
          <div onClick={handleClick} className="cursor-pointer p-4">
            <h1 className="text-blue-500 text-3xl border-2 border-blue-500 p-1">X</h1>
          </div>
        </div>
      </motion.div>

      {/* Header */}
      <div className="bg-[#232f3e] fixed w-full top-0 z-[1000]">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="flex items-center">
            <div onClick={handleClick} className="cursor-pointer">
              <img src={icon} className="w-8" alt="Menu" />
            </div>
            <div className="ml-3">
              <img src={k} className="w-32" alt="Logo" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div className="text-white">Sign in</div>
            <img src={admin} className="w-8" alt="Admin" />
            <div className="text-orange-500 text-lg">0</div>
            <img src={Grocery} className="w-8" alt="Grocery" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center px-4 py-2">
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="w-80 h-10 rounded-md px-3"
          />
          <img src={Search} className="w-10 h-10 ml-2 cursor-pointer" alt="Search" />
        </div>
      </div>

    </>
  );
};

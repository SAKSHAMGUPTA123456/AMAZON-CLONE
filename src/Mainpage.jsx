import { useState } from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { useLocation } from "react-router-dom";
export const Main = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/main";
  return (
 <>
      {/* Pass state to Header */}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

       {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
          onClick={() => setSidebarOpen(false)} // Clicking outside closes sidebar
        ></div>
      )}

      Main Content (disabled when sidebar is open) 
      <div className={`${sidebarOpen ? " opacity-50 pointer-events-none" : ""} pt-28 h-[1500px]  overflow-hidden w-full`} style={{backgroundColor:"#1C1C1C", height: isHome ? "6000px" : "1500px",}}>
        <Outlet/>  
      </div>
      <Footer/>
    </>
  );
};

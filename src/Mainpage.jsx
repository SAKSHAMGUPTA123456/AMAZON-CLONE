import { useState } from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { useLocation } from "react-router-dom";
export const Main = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/main";
  const isHomes=location.pathname==="/main/gh";
  const isHomess=location.pathname==="/main/nn";
  const isHomesss=location.pathname==='/main/aa'
  const sd=location.pathname==="/main/xx"
  return (
 <>
      {/* Pass state to Header */}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
       {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
          onClick={() => setSidebarOpen(false)} 
        ></div>
      )}

      Main Content (disabled when sidebar is open) 
   <main className="flex-1">
        <Outlet />
      </main>
   
      <Footer/>
    </>
  );
};

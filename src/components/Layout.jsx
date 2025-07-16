import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto p-6">
        <Outlet /> {/* Page content will be rendered here */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

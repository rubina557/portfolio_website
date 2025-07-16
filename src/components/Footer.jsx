import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} website name. All Rights Reserved.</p>
        {/*Add social media icons/links here */}
      </div>
    </footer>
  );
};

export default Footer;

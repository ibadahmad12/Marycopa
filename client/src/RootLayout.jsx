import React from "react";
import Navbar from "./components/navbar/Navbar";

const RootLayout = ({ children }) => {
   return (
      <>
         <Navbar />
         <div>{children}</div>
      </>
   );
};

export default RootLayout;

import React from "react";
// import { Footer } from "./Footer";
import Header from "./Header";
const Master = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div>{children}</div>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Master;

import React from "react";
import Master from "../../Component/Layouts/Master";
import "../../Styles/Homestyle.css";
import Sectionone from "./Sectionone";

const Home = () => {
  return (
    <>
      <Master>
        {" "}
        <Sectionone></Sectionone>
      </Master>
    </>
  );
};

export default Home;

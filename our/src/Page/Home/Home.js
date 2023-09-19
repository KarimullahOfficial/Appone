import React from "react";
import Master from "../../Component/Layouts/Master";
import "../../Styles/Homestyle.css";
import Sectionone from "./Sectionone";
import { Sectiontwo } from "./Sectiontwo";

const Home = () => {
  return (
    <>
      <Master>
        {" "}
        <Sectionone></Sectionone>
        <Sectiontwo></Sectiontwo>
      </Master>
    </>
  );
};

export default Home;

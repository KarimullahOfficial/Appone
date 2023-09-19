import React from "react";
import Master from "../../Component/Layouts/Master";
import "../../Styles/Homestyle.css";
import Sectionone from "./Sectionone";
import { Sectiontwo } from "./Sectiontwo";
import Sectionthree from "./Sectionthree";

const Home = () => {
  return (
    <>
      <Master>
        {" "}
        <Sectionone></Sectionone>
        <Sectiontwo></Sectiontwo>
        <Sectionthree></Sectionthree>
      </Master>
    </>
  );
};

export default Home;

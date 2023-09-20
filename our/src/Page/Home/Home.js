import React from "react";
import Master from "../../Component/Layouts/Master";
import "../../Styles/Homestyle.css";
import Sectionone from "./Sectionone";
import { Sectiontwo } from "./Sectiontwo";
import Sectionthree from "./Sectionthree";
import Sectionfour from "./Sectionfour";
import Sectionfive from "./Sectionfive";

const Home = () => {
  return (
    <>
      <Master>
        {" "}
        <Sectionone></Sectionone>
        <Sectiontwo></Sectiontwo>
        <Sectionthree></Sectionthree>
        <Sectionfour></Sectionfour>
        <Sectionfive></Sectionfive>
      </Master>
    </>
  );
};

export default Home;

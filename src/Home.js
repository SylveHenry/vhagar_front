import React from "react";
import Banner from "./Components/Banner";
import CustomNavbar from "./Components/Navbra";
import About from "./Components/About";
import Incentives from "./Components/Incentives";
import Tokenomics from "./Components/Tokenomics";
import Roadmap from "./Components/Roadmap";
import OurNetwork from "./Components/OurNetwork";
import Footer from "./Components/Footer";


const Home = () => {
  return (
    <div>
      <CustomNavbar></CustomNavbar>
      <Banner></Banner>
      <About></About>
      <Incentives></Incentives>
      <Tokenomics></Tokenomics>
      <Roadmap></Roadmap>
     <OurNetwork></OurNetwork>
     <Footer></Footer>
    </div>
  );
};

export default Home;

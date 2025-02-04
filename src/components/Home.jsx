import React from "react";
import Main_banner from "./Home/Main_banner";
import Menu_main from "./Home/Menu_main";
import Service_area from "./Home/Service_area";
import Portfolio from "./Home/Portfolio";
import Shop from "./Home/Shop";
import Product_menu from "./Home/Product_menu";
import Deliver_area from "./Home/Deliver_area";
import Team_area from "./Home/Team_area";
import Brand_area from "./Home/Brand_area";
import Client from "./Home/Client";
import Contact_area from "./Home/Contact_area";

const Home = () => {
  return (
    <>
      <Main_banner />
      <Menu_main />
      <Service_area />
      <Portfolio />
      <Shop />
      <Product_menu />
      <Deliver_area />
      <Team_area />
      <Brand_area />
      <Client />
      <Contact_area />
    </>
  );
};
export default Home;

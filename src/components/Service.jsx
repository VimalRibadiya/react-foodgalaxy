import React from "react";
import Service_banner from "./Service/Service_banner";
import Food_stories from "./Service/Food_stories";
import Counter_area from "./Service/Counter_area";
import Product_menu from "./Home/Product_menu";
import Shop from "./Home/Shop";
import Client from "./Home/Client";

const Service = () => {
  return (
    <>
      <Service_banner />
      <Food_stories />
      <Counter_area />
      <Product_menu />
      <Shop />
      <Client />
    </>
  );
};

export default Service;

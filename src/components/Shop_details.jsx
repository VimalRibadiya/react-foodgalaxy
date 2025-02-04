import React from "react";
import Shop_detail_banner from "./Shop-details/Shop_detail_banner";
import Shop_details_info from "./Shop-details/Shop_details_info";
import Shop_desc from "./Shop-details/Shop_desc";
import Shop_review from "./Shop-details/Shop_review";

const Shop_details = () => {
    return(
        <>
            <Shop_detail_banner/>
            <Shop_details_info/>
            <Shop_desc/>
            <Shop_review/>
        </>
    )
}

export default Shop_details
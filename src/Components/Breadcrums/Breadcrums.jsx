import React from "react";
import "./Breadcrums.css";
import arrow_img from "../Assets/breadcrum_arrow.png";

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrums">
      HOME <img src={arrow_img} alt="" /> SHOP <img src={arrow_img} alt="" />{" "}
      {product.category} <img src={arrow_img} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrums;

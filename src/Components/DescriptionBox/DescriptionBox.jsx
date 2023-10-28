import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (77)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis
          explicabo non tempora a asperiores minus, expedita itaque neque natus
          earum maiores ipsam sit? Ratione temporibus nesciunt quo obcaecati
          inventore.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero
          nesciunt beatae minima quis rem maxime maiores atque perferendis,
          eveniet qui labore quam iste ea magnam dicta quae tenetur recusandae?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;

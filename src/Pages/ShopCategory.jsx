import React, { useContext } from "react";
import "./Style/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import drop_dowm_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Items/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  console.log(all_product, "all products");
  return (
    <div className="shop-category">
      <img className="shopCategory-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={drop_dowm_icon} alt="" />
        </div>
      </div>

      <div className="shopCategory-products">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;

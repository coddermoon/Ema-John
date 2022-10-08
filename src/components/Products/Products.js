import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./product.css";
import StarRatings from "react-star-ratings";

const Products = ({ product }) => {
  const { img,name,price,seller ,ratings} = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="details">
        <h2>{name}</h2>
        <h4>price :{price}</h4>
        <p>Manufacturer : {seller}</p>

        <p>
          rating :
          <StarRatings
            className="rate"
            rating={ratings}
            starRatedColor="orange"
            starDimension="20px"
            starSpacing="5px"
            name="rating"
          />
        </p>
      </div>
      <button className="btn">
        Add To Cart{" "}
        <FontAwesomeIcon
          className="icon"
          icon={faCartShopping}
        ></FontAwesomeIcon>{" "}
      </button>
    </div>
  );
};

export default Products;

import React from "react";
import "./index.css";
const Products = () => {
  const items = [
    "CHEMICALS & PROCESS",
    "POWER",
    "WATER & WASTE WATER",
    "OILS & GAS",
    "PHARMA",
    "SUGARS & DISTILLERIES",
    "PAPER & PULP",
    "MARINE & DEFENCE",
    "METAL & MINING",
    "FOOD & BEVERAGE",
    "PETROCHEMICAL & REFINERIES",
    "SOLAR",
    "BUILDING",
    "HVAC",
    "FIRE FIGHTING",
    "AGRICULTURE & RESIDENTIAL",
  ];

  const renderedItems = (
    <div className="industry-type-cont">
      {items.map((item, index) => (
        <span className="industry-type" key={index}>
          {item}
          {index !== items.length - 1 && (
            <span className="vertical-line"> | </span>
          )}
        </span>
      ))}
    </div>
  );

  return (
    <div>
      <p className="product-details">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <img
        className="img-product"
        src="https://res.cloudinary.com/drvjsegeb/image/upload/v1709038823/3_qpbapa.png"
      />
      <p className="product-items">
        {"   "}
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <hr />
      <p className="products-heading">
        C.R.I FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>

      {renderedItems}
    </div>
  );
};

export default Products;

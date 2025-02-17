import React, { useState } from "react";
import "./body.css";
import FilterInput from "./FilterInput";
import Pins from "./Pins";

const Body = () => {
  const [selectedCategory, setSelectedCategory] = useState("Sideboard");
  const [selectedMaterial, setSelectedMaterial] = useState("all");

  return (
    <div className="innerBody">
      <FilterInput setSelectedCategory={setSelectedCategory} setSelectedMaterial={setSelectedMaterial} />
      <Pins selectedCategory={selectedCategory} selectedMaterial={selectedMaterial} />
    </div>
  );
};

export default Body;

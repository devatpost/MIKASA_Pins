import React from "react";

const FilterInput = ({ setSelectedCategory, setSelectedMaterial }) => {
  return (
    <div className="filterInput">
      <div className="innerBox">
        <div className="container">
          <div>
            <div className="smallHeading">Imagine a</div>
            <div className="imagineDrop">
              <select className="dropdown" name="furniture" onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="Sideboard">Sideboard</option>
                <option value="Shelf">Shelf</option>
              </select>
            </div>
          </div>
          <div className="madeContainer">
            <div className="smallHeading">Made of</div>
            <div className="imagineDrop">
              <select className="dropdown" name="material" onChange={(e) => setSelectedMaterial(e.target.value)}>
                <option value="all">All</option>
                <option value="Plain">Plain</option>
                <option value="Texture">Textured</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterInput;

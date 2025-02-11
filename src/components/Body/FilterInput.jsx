import React from "react";

const FilterInput = () => {
  return (
    <div className="filterInput">
      <div className="innerBox">
        <div className="container">
          <div>
            <div className="smallHeading">Imagine a</div>
            <div className="imagineDrop">
              <select className="dropdown">
                <option value="Option1">Cabinet</option>
                <option value="Option2">Shelf</option>
              </select>
            </div>
          </div>
          <div className="madeContainer">
            <div className="smallHeading">Made of</div>
            <div className="imagineDrop">
              <select className="dropdown">
                <option value="Material1">wool</option>
                <option value="Material2">uranium</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterInput;

import React, { useEffect, useState } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import axios from "axios";
import cross from '../../assets/cross.svg'

const Pins = ({ selectedCategory, selectedMaterial }) => {
  const [itemData, setItemData] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.post("https://hy82gexng7.execute-api.ap-south-1.amazonaws.com/dev/pins/fetchimages", {
          params: { furniture_type: selectedCategory, material_type: selectedMaterial },
        });
        setItemData(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    

    fetchImages();
  }, [selectedCategory, selectedMaterial]);

  useEffect(() => {
    const grid = document.querySelector(".image-grid");
    if (grid) {
      imagesLoaded(grid, () => {
        new Masonry(grid, {
          itemSelector: ".image-item",
          columnWidth: ".image-item",
          percentPosition: true,
          gutter: 15,
        });
      });
    }
  }, [itemData]);

  const handleImageClick = (alt) => {
    const baseUrl = window.location.origin;
    const url = `${baseUrl}/?Image_id=${encodeURIComponent(alt)}`;
    window.location.href = url;
  };

  return (
    <div className="pins">
      <div className="image-grid">
        {itemData.map((item, index) => (
          <div className="image-item" key={index}>
            <div className="image-wrapper">
              <img src={item.img} alt={item.title} className="cursor-pointer" />
              <div className="plusIcon">
              <img src={cross} alt="Click" onClick={() => handleImageClick(item.title)}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pins;

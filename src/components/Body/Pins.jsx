import React, { useEffect, useState } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import axios from "axios";
import cross from '../../assets/cross.svg'

const Pins = ({ selectedCategory, selectedMaterial }) => {
  const [itemData, setItemData] = useState([])

  // const demo=[{
  //   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  //   title: 'Fern',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
  //   title: 'Snacks',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
  //   title: 'Mushrooms',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
  //   title: 'Tower',
  // }]

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("/.netlify/functions/getImages", {
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
    const url = `${baseUrl}/?ImageID=${encodeURIComponent(alt)}`;
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

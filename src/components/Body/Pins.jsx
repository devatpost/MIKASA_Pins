import React, { useEffect, useState } from 'react';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import axios from 'axios';

const Pins = () => {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/.netlify/functions/getImages');
        setItemData(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const grid = document.querySelector('.image-grid');
    if (grid) {
      imagesLoaded(grid, () => {
        new Masonry(grid, {
          itemSelector: '.image-item',
          columnWidth: '.image-item',
          percentPosition: true,
          gutter: 15,
        });
      });
    }
  }, [itemData]);

  const handleImageClick = (alt) => {
    const url = `https://mikasa.mikasahub.com?ImageID=${encodeURIComponent(alt)}`;
    window.location.href = url;
  };

  return (
    <div className="pins">
      <div className="image-grid">
        {itemData.map((item, index) => (
          <div className="image-item" key={index} onClick={() => handleImageClick(item.title)}>
            <div className="image-wrapper">
              <img src={item.img} alt={item.title} className="cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pins;

import React from "react";
import {galleryImagesType, galleryAltType} from "../../types";

const Gallery = (props) => {
  const {images, alt} = props;

  return (
    <div className="property__gallery">
      {images.map((src, index) => (
        <div key={`${index}-${src}`} className="property__image-wrapper">
          <img className="property__image" src={`img/${src}`} alt={alt}/>
        </div>
      ))}
    </div>
  );
};

Gallery.propTypes = {
  images: galleryImagesType,
  alt: galleryAltType
};

export default Gallery;

import React from "react";

const Images = props => {
  const imageSize = 150;
  let images;
  if (props.images) {
    images = props.images.map(image => {
      return (
        <img
          key={image.id}
          alt={image.title}
          src={`https://farm${image.farm}.staticflickr.com/${image.server}/${
            image.id
          }_${image.secret}.jpg`}
          height={imageSize}
          width={imageSize}
        />
      );
    });
  }

  return <div>{images}</div>;
};

export default Images;

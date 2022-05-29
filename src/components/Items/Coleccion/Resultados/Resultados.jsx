import React from "react";
import "../../items_module.css";

const Resultados = ({ title, images }) => {
  return (
    <a href={images.downsized_medium.url}>
      <img
      className="imgGif"
      src={images.downsized_medium.url}
      alt={`imagen ${title} `}
    />
    </a>

  );
};

export {Resultados};

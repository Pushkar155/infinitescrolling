import React from "react";
import image from "../assets/dummy.jpg";

const MovieCard = ({ myData }) => {
  const { title, body, } = myData;
  return (
    <div className="card">
      <div className="card-info">
        <img className="card-id" src={image} alt="#"></img>
        <p>{body.substr(0, 150)}</p>
        <h2>{title.substr(0, 15)}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
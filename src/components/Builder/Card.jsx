import { useState } from "react";
import "../../styles/Card.css";

function Card({ text, children }) {
  /* 1- CARD */
  return (
    <div className="Card">
      {text}
      {children}
    </div>
  );
}

export default Card;

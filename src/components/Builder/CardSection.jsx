import { useState } from "react";
import "../../styles/CardSection.css";

function CardSection({ children }) {
  /* 1- CARD SECTION */
  return <div className="CardSection">{children}</div>;
}

export default CardSection;

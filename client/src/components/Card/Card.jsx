import { useState } from "react";
import style from "./Card.module.css";

const Card = ({ price }) => {
  const [pick, setPick] = useState(false);

  return (
    <div className={style.card}>
      <h1 className={style.cardHeader}>Service Name</h1>
      <img src="" alt="Place a picture here" />
      <h3 className={style.price}>${price}</h3>
    </div>
  );
};

export default Card;

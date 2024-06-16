import { useState } from "react";
import style from "./Card.module.css";

const Card = () => {

const [pick,setPick] = useState(false)


  return (
    <div>
      <div className={style.card}>
		<h1></h1>

      </div>
    </div>
  );
};

export default Card;

import React, { useState } from 'react';

import style from "./Greeting.module.css";
import Order from "../Order/Order";

function Greeting() {
  const [isOrderVisible, setIsOrderVisible] = useState(false);

  const toggleOrderVisibility = () => {
    setIsOrderVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className={style.body}>
      <div>
        <h1 className={style.header}>Hello,</h1>
        <p className={style.mainParagraph}>
          Write<span className={style.span}> something</span>, <br />
          inspirational <span className={style.span}> in </span> this{" "}
          <span className={style.span}> section </span>. <br />
        </p>
        <p className={style.paragraph}>(Write about your experience here)</p>
      </div>
      <button className={style.button} type="button" onClick={toggleOrderVisibility}>
        Order Now
      </button>
      {isOrderVisible && <Order />}
    </div>
  );
}

export default Greeting;

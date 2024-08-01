import React, { useState } from 'react';

import style from "./Greeting.module.css";
import Order from "../Order/Order";

function Greeting() {

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
    </div>
  );
}

export default Greeting;

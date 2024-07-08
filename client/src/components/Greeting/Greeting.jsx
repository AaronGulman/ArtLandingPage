// import React, {useEffect} from 'react'

import style from "./Greeting.module.css";

// import image from '../assets/image.jpg'

function Greeting() {
  return (
    <div className={style.body}>
      <div>
        <h1 className={style.header}>Hello,</h1>
        <p className={style.mainParagraph}>
          Write<span className={style.span}> something</span>, <br></br>
          inspirational <span className={style.span}> in </span> this{" "}
          <span className={style.span}> section </span>. <br></br>
        </p>
        <p className={style.paragraph}>(Write about your experience here)</p>
      </div>
      <button className={style.button} type="submit" href="#order">
        ORDER NOW
      </button>
    </div>
  );
}

export default Greeting;

// import React, {useEffect} from 'react'

import style from "./Greeting.module.css";

// import image from '../assets/image.jpg'

function Header() {
  return (
    <div className={style.body}>
      <div>
        <h1 className={style.header}>Hello!</h1>
        <p className={style.mainParagraph}>
          Step into <span className={style.span}>my world</span>, <br></br>where{" "}
          <span className={style.span}>artistry</span> meets{" "}
          <span className={style.span}>experience</span>. <br></br>
        </p>
        <p className={style.paragraph}>
         (Write about your experience here)
        </p>
        <button className={style.button} type="submit" href="#order">
          ORDER NOW
        </button>
      </div>

      {/* <img className={style.image} src={image} id="image" alt="image" height="450" width="350"/> */}
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import style from "./Header.module.css";
import Order from "../Order/Order";

function Header() {
  const [isOrderVisible, setIsOrderVisible] = useState(false);

  const toggleOrderVisibility = () => {
    setIsOrderVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className={style.header}>
      <h1 className={style.pageName}>
        <img
          height={110}
          width={200}
          src="../../public/NewLogo.svg"
          alt="Logo"
        />
      </h1>
      <nav className={style.nav}>
        <ul className={style.ul}>
          <a className={style.links} href="#projects">
            <li className={style.list}>Projects</li>
          </a>

          <a className={style.links} href="#Services">
            <li className={style.list}>Services</li>
          </a>

          <a className={style.links} href="#contact">
            <li className={style.list}>Contact</li>
          </a>

          <a
            onClick={toggleOrderVisibility}
            className={style.links}
            href="#order"
          >
            <li className={style.contact}>Order</li>
          </a>
        </ul>
      </nav>
      {isOrderVisible && <Order />}
    </div>
  );
}

export default Header;

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
        <img height={110} width={200} src="../../public/NewLogo.svg" alt="Logo" />
      </h1>
      <nav className={style.nav}>
        <ul className={style.ul}>
          <li className={style.list}>
            <a className={style.links} href="#projects">
              Projects
            </a>
          </li>
          <li className={style.list}>
            <a className={style.links} href="#Services">
              Services
            </a>
          </li>
          <li className={style.list}>
            <a className={style.links} href="#contact">
              Contact
            </a>
          </li>
          <li className={style.contact}>
            <a onClick={toggleOrderVisibility} className={style.links} href="#order">
              Order
            </a>
          </li>
        </ul>
      </nav>
      {isOrderVisible && <Order />}
    </div>
  );
}

export default Header;

import React, { useEffect, useState } from "react";
import style from "./Header.module.css";
import Order from "../Order/Order";

function Header() {
  const [isOrderVisible, setIsOrderVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  

  const toggleOrderVisibility = () => {
    setIsOrderVisible((prevVisible) => !prevVisible);
  };

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible((prevVisible) => !prevVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);
  


  return (
    <div className={style.header}>
      {screenWidth <= 390 ? (
       <img
       height={55}
       width={100}
       src="../../public/NewLogo.svg"
       alt="Logo"
     />
      ):(
      <h1 className={style.pageName}>
        <img
          height={110}
          width={200}
          src="../../public/NewLogo.svg"
          alt="Logo"
        />
      </h1>
      )}
      <nav className={style.nav}>
      {screenWidth <= 390 ? (
          <>
          <button onClick={toggleDropdownVisibility} className={style.dropdownButton}>
            Menu
          </button>
          {isDropdownVisible && (
            <ul className={style.ul}>
              <li className={style.list}>
                <a className={style.links} href="#projects">
                  Projects
                </a>
              </li>
              <li className={style.list}>
                <a className={style.links} href="#services">
                  Services
                </a>
              </li>
              <li className={style.list}>
                <a className={style.links} href="#contact">
                  Contact
                </a>
              </li>
              <li className={style.list}>
                <a onClick={toggleOrderVisibility} className={style.links} href="#order">
                  Order
                </a>
              </li>
            </ul>
          )}
        </>
      ) : (
        <ul className={style.ul}>
          <a className={style.links} href="#projects">
            <li className={style.list}>Projects</li>
          </a>

          <a className={style.links} href="#services">
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
      )}
      </nav>
      {isOrderVisible && <Order />}
    </div>
  );
}

export default Header;

import { useState } from "react";
import Card from "../Card/Card";
import style from "./Services.module.css";

function Services() {

  return (
    <div className={style.servicesBox}>
      <h1 className={style.header}>
        Here you<span className={style.span}> write what </span>
        services you provide
      </h1>
      <div className={style.cards}>
      <Card price="999"/>
      <Card/>
      <Card/>
      <Card/>

      </div>
    </div>
  );
}

export default Services;

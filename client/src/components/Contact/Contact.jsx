import React, { useState } from "react";

import style from "./Contact.module.css";
import Order from "../Order/Order";
import insta from "../../assets/insta.svg";
import fB from "../../assets/facebook.svg";
import lIn from "../../assets/linkedIn.svg";

function Contact() {
  return (
    <div className={style.body}>
      <div>
        <p className={style.mainParagraph}>
          Write your<span className={style.span}> contact </span>, info{" "}
          <span className={style.span}> in </span> this{" "}
          <span className={style.span}> section </span>. <br />
        </p>

        <p className={style.paragraph}></p>
        <div className={style.mapBox}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d92316.32627313284!2d-79.40114645520022!3d43.692150072955144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sco!4v1722480302672!5m2!1sen!2sco"
            className={style.map}
          ></iframe>
                  <div className={style.socials}>
          <img src={insta} height="150" width="150" alt="" />
          <img src={fB} height="150" width="150" alt="" />
          <img src={lIn} height="150" width="150" alt="" />
        </div>
        </div>

 
      </div>
    </div>
  );
}

export default Contact;

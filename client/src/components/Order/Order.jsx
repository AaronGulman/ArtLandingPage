import { useState } from "react";
import style from "./Order.module.css";

const Order = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [communication, setCommunication] = useState([]);

  return (
    <div className={style.body}>
      <h1>ORDER NOW</h1>
      <label>Name: </label>
      <input type="text" value={clientName} />
      <label>Phone number: </label>
      <input type="tel" />
      <label>Email: </label>
      <input type="email" />
      <label>Preferred Contact Method:</label>
      <div>
        <label>
          <input type="checkbox" />
          WhatsApp
        </label>
        <label>
          <input type="checkbox" />
          SMS
        </label>
        <label>
          <input type="checkbox" />
          Email
        </label>
        <label>
          <input type="checkbox" />
          Social Media
        </label>
      </div>
      <submit className={style.submit} value="SUBMIT">SUBMIT</submit>
    </div>
  );
};

export default Order;

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
      <label>Name:</label>

        <input type="text" value={name} />

      <label>Number:</label>
        <input type="tel" value={telephone}/>
      <label>Email:</label>
        <input type="email" value={email}/>
      <label>Preferred Contact Method:</label>
      <div>
        <label>
          <input
            type="checkbox"
            value={name}
            onClick={(e) => setName(e.target.value)}
          />
          WhatsApp
        </label>
        <label>
          <input
            type="checkbox"
            value={email}
            onClick={(e) => setEmail(e.target.value)}
          />
          SMS
        </label>
        <label>
          <input
            type="checkbox"
            value={telephone}
            onClick={(e) => setTelephone(e.target.value)}
          />
          Email
        </label>
        <label>
          <input
            type="checkbox"
            value={communication}
            onClick={(e) => setCommunication(e.target.value)}
          />
          Social Media
        </label>
      </div>
      <submit className={style.submit} value="SUBMIT">
        SUBMIT
      </submit>
    </div>
  );
};

export default Order;

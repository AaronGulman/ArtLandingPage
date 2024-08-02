import { useState } from "react";
import axios from "axios";
import style from "./Order.module.css";


const Order = () => {
  const [name, setName] = useState("");
  const [order, setOrder] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [preference, setPreference] = useState([]);

  const handleOrder = () => {
    if (
      !name || 
      !email || 
      !order ||
      !number ||
      preference.length == 0
      ) {
      alert("All fields are required");
      return;
    }

    const data = {
      name,
      order,
      email,
      number,
      preference,
    };

    axios
      .post("http://localhost:5050/orders", data)
      .then((res) => console.log("Success!\n", res.data))
      .catch((err) => console.error(err));

      setName("");
      setOrder("");
      setEmail("");
      setNumber("");
      setPreference([]);

      alert("SUCCESS!")
      window.location.reload();
      
  };

  const handleCheckboxChange = (event) =>{
    const {value , checked} = event.target;
    setPreference(prevPreference => {
      if(checked){
        return [...prevPreference, value];
      }else{
        return prevPreference.filter(item => item !== value)
      }
    });
  };


  return (
    <div className={style.body}>
      <h1>ORDER NOW</h1>
      <input
        type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
      />
      <label>Order Details:</label>

<input
        type="textArea"
          placeholder="Order details..."
          value={order}
          onChange={(e) => setOrder(e.target.value)}
      />

      <label>Number:</label>
      <input
        type="tel"
        placeholder="Phone..."
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <label>Email:</label>

      <input
        type="email"
        placeholder="Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Preferred Contact Method:</label>

      <div>
        <label>
          <input
            type="checkbox"
            value="WhatsApp"
            onChange={handleCheckboxChange}
          />
          WhatsApp
        </label>
        <label>
          <input 
          type="checkbox" 
          value="SMS" 
          onChange={handleCheckboxChange} 
          />
          SMS
        </label>
        <label>
          <input 
          type="checkbox" 
          value="Email" 
          onChange={handleCheckboxChange} 
          />
          Email
        </label>
        <label>
          <input 
          type="checkbox" 
          value="Social Media" 
          onChange={handleCheckboxChange} 
          />
          Social Media
        </label>
      </div>
      <button onClick={handleOrder}>
        Submit 
      </button>

    </div>
  );
};

export default Order;

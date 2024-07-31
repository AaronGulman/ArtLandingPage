import { useState } from "react";
import style from "./Order.module.css";


const Order = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [preference, setPreference] = useState([]);


  const handleOrder = () => {
    if (!name || !email || !telephone) {
      alert("`All fields are required`");
      return;
    }

    const data = {
      name,
      email,
      number,
      preference,
    };

    axios
      .post("http:://localhost:5050/orders", data)
      .then((res) => console.log("Success!\n"), res.data)
      .catch((err) => console.error(err));
  };

  const handleCheckboxChange = (event) =>{
    const {value , checked} = event.target;
    setPreference(prevPreference => {
      if(checked){
        return [...prevPreference, value];
      }else{
        return prevPreference.filter(item => item != value)
      }
    });
  };


  return (
    <div className={style.body}>
      <h1>ORDER NOW</h1>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onClick={(e) => setName(e.target.value)}
      />
      <label>Number:</label>
      <input
        type="tel"
        value={number}
        onClick={(e) => setNumber(e.target.value)}
      />

      <label>Email:</label>

      <input
        type="email"
        value={email}
        onClick={(e) => setEmail(e.target.value)}
      />
      <label>Preferred Contact Method:</label>

      <div>
        <label>
          <input
            type="checkbox"
            value="WhatsApp"
            onClick={handleCheckboxChange}
          />
          WhatsApp
        </label>
        <label>
          <input 
          type="checkbox" 
          value="SMS" 
          onClick={handleCheckboxChange} />
          SMS
        </label>
        <label>
          <input 
          type="checkbox" 
          value="Email" 
          onClick={handleCheckboxChange} />
          Email
        </label>
        <label>
          <input 
          type="checkbox" 
          value="Social Media" 
          onClick={handleCheckboxChange} />
          Social Media
        </label>
      </div>
      <submit className={handleOrder} value="SUBMIT">
        SUBMIT
      </submit>
    </div>
  );
};

export default Order;

import style from "./Order.module.css";

const Order = () => {
  return (
    <form className={style.body}>
      <h1>ORDER NOW</h1>
      <label>Name: </label>
      <input type="text" />
      <label>Phone number: </label>
      <input type="tel" />
      <label>Email: </label>
      <input type="email" />
      <label>Preferred Contact Method</label>
      <div>
        <input type="checkbox" />
        WhatsApp
        <input type="checkbox" />
        SMS
        <input type="checkbox" />
        Email
        <input type="checkbox" />
        Social Media
      </div>
      <input className={style.submit} type="submit" value="SUBMIT" />
    </form>
  );
};

export default Order;

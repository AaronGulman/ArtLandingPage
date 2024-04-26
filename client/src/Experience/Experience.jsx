import style from "./Experience.module.css";

function Experience() {
  return (
    <div className={style.body}>
      <div className={style.innerBox}>
        <h2 className={style.header}>Digital Art</h2>
      </div>

      <div className={style.innerBox}>
        <h2 className={style.header}>Modern Design</h2>
      </div>

      <div className={style.innerBox}>
        <h2 className={style.header}>Personalized</h2>
      </div>
    </div>
  );
}

export default Experience;

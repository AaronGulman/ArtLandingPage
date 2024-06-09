import style from "./Services.module.css";

function Services() {
  return (
    <div className={style.projectBox}>
      <h1 className={style.header}>
        Projects made by <span className={style.span}>(your name)</span>
      </h1>
      <p className={style.mainParagraph}>
        Write <span className={style.span}>about</span>, a
       the <span className={style.span}>projects</span> that
        <br></br> you have worked on{" "}
        <span className={style.span}>here..</span>{" "}
      </p>
    </div>
  );
}

export default Services;

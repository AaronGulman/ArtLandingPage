import style from "./Services.module.css";

function Services() {
  return (
    <div className={style.projectBox}>
      <h1 className={style.header}>
        Projects made by <span className={style.span}>ME</span>
      </h1>
      <p className={style.mainParagraph}>
        Discover my <span className={style.span}>diverse portfolio</span>, a
        kaleidoscope of <span className={style.span}>artistic</span> endeavors
        <br></br> that showcases the depth and breadth of my{" "}
        <span className={style.span}>creative vision.</span>{" "}
      </p>
    </div>
  );
}

export default Services;

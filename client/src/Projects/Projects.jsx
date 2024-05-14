import style from "./Projects.module.css";

function Projects() {
  return (
    <div className={style.projectBox}>
      <div>
      <div className={style.intro}>
        <h1 className={style.header}>
          Projects made by <span className={style.span}>ME</span>
        </h1>
      </div>
      <div className={style.introTwo}></div>
      <p className={style.mainParagraph}>
        Discover my <span className={style.span}>diverse portfolio</span>, a
        kaleidoscope of <span className={style.span}>artistic</span> endeavors
        <br></br> that showcases the depth and breadth of my{" "}
        <span className={style.span}>creative vision.</span>{" "}
      </p>
      <div className={style.projects}>
        <div className={style.innerBox}></div>
        <hr className={style.hr} />
        <div className={style.innerBox}></div>
        <hr className={style.hr} />

        <div className={style.innerBox}></div>
        <hr className={style.hr} />

        <div className={style.innerBox}></div>
      </div>
      </div>
    </div>
  );
}

export default Projects;

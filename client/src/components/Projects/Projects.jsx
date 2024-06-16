import style from "./Projects.module.css";

function Projects() {
  return (
    <div className={style.projectBox}>
        <div className={style.intro}>
          <h1 className={style.header}>
            Projects made by <span className={style.span}>ME</span>
          </h1>
        </div>

        <div className={style.introTwo}>
          <p className={style.mainParagraph}>
            Discover my <span className={style.span}>diverse portfolio</span>, a
            kaleidoscope of <span className={style.span}>artistic</span>{" "}
            endeavors
            <br></br> that showcases the depth and breadth of my{" "}
            <span className={style.span}>creative vision.</span>{" "}
          </p>
        </div>

        <div className={style.projects}>
          <div className={style.innerBox}>
            <img className={style.image} src="../../../public/1.jpeg" alt="" />
          </div>
          <hr className={style.hr} />

          <div className={style.innerBox}>
            <img className={style.image} src="../../../public/2.jpeg" alt="" />
          </div>
          <hr className={style.hr} />

          <div className={style.innerBox}>
            <img className={style.image} src="../../../public/3.jpeg" alt="" />
          </div>
          <hr className={style.hr} />

          <div className={style.innerBox}>
            <img className={style.image} src="../../../public/4.jpeg" alt="" />
          </div>
          <hr className={style.hr} />
        </div>
    </div>
  );
}

export default Projects;

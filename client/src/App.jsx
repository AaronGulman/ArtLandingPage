import Header from "./components/Header/Header";
import Greeting from "./components/Greeting/Greeting";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <section>
        <Header />
      </section>

      <section>
        <Greeting />
      </section>

      <section>
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="Services">
        <Services />
      </section>
    </>
  );
}

export default App;

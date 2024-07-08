import Header from "./components/Header/Header";
import Greeting from "./components/Greeting/Greeting";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
// import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <>
      <section>
        <Header />
      </section>

      <section>
        <Greeting />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="services">
        <Services />
      </section>

      {/* <section id=" contact">
        <Contacts/>
      </section> */}
    </>
  );
}

export default App;

import Header from './Header/Header'
import Greeting from './Greeting/Greeting'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import Services from './Services/Services'



function App() {
  return (
    <>
    <section>
    <Header/>
    </section>

    <section>   
      <Greeting/>
    </section>
    
    <section>
    <Experience/>
    </section>

    <section id="projects">
    <Projects/>
    </section>

    <section id="Services">
    <Services/>
    </section>
    </>
  );
}

export default App;

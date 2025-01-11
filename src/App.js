import './App.css';
import TerminalPortfolio from './Terminal';
import Header from './features/Header';
import Home_Body from './features/Home_Body';
import Projects from './features/Projects';
import Resume from './features/Resume'; 

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home">
        <Home_Body />
      </section>
      <section id="about">
        <TerminalPortfolio />
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="resume">
        <Resume/>
      </section>

    </div>
  );
}

export default App;

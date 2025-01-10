import './App.css';
import TerminalPortfolio from './Terminal';
import Header from './features/Header';
import Home_Body from './features/Home_Body';
import Projects from './features/Projects';

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

      </section>
      <Projects/>
    </div>
  );
}

export default App;

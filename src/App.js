import './App.css';
import TerminalPortfolio from './Terminal';
import Header from './features/Header';
import Home_Body from './features/Home_Body';
import ProjectComponent from './features/ProjectComponents'

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home">
        <Home_Body />
      </section>
      <section id="projects">
        <TerminalPortfolio />
      </section>
      <ProjectComponent/>
    </div>
  );
}

export default App;

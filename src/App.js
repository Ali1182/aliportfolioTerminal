import './App.css';
import TerminalPortfolio from './Terminal';
import Header from './features/Header';
import Home_Body from './features/Home_Body';
function App() {
  return (
    <div className="App">
      <Header />
      <Home_Body />
      <section id="projects">
        <TerminalPortfolio />
      </section>
    </div>
  );
}

export default App;

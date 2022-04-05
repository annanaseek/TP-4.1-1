import logo from './logo.svg';
import './App.css';
import Header from './components/layout/header/Header.tsx'

function App() {
  return (
    <>
    <Header />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
    </>
  );
}

export default App;

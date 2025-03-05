import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greetings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Greeting />
        </a>
        {/* <button className='App' id='btn' onClick={document.getElementById('btn').textContent="You Clicked the button"}> Click me </button> */}
      </header>
    </div>
  );
}

export default App;

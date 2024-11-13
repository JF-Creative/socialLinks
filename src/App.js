import "./App.css";
import { Social } from "./components/Social.jsx";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="logoContainer">
          <img src="l7.png" alt="Alerta Tolima" />
        </div>
        <div className="socialContainer">
          <h2 id="title">Síga nuestros canales</h2>
          <div className="cont1">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

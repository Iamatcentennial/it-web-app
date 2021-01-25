import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "./styles.css";
import TopBar from "./components/TopBar/TopBar";
import NavBar from "./components/NavBar/NavBar";
export default function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
}

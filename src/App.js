import "./App.css";
import MainPage from "./MainPage/MainPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./MainPage/About";

function App() {
  return (
    <Router>
      <Router>
        <div>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/about">About</Link>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/project">{/* <Projects /> */}</Route>
          <Route exact path="/education">{/* <Education /> */}</Route>
        </div>
      </Router>
    </Router>
  );
}

export default App;

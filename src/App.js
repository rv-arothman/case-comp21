import "./App.css"
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/Landing"
import ResultsPage from "./components/Results"

//  const rootElement = document.getElementById("root");
//  ReactDOM.render(
//    <Router>
//     <Switch>
//      <Route path={"/"} component={LandingPage}></Route>
//      <Route path={"/results"} component={ResultsPage}></Route>>
//    </Switch>
//    </Router>,
//    rootElement
//  );


const Home = () => (
  <div className="App-Landing"><LandingPage></LandingPage></div>
);

const Results = () => (
  <div className="App-Landing"><ResultsPage></ResultsPage></div>
)

class App extends Component {
  

  render() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home}></Route>
          <Route exact path={"/results"} component={Results}></Route>
        </Switch>
      </Router>
      
    </div>
  );
}
}

export default App;

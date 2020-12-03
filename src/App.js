import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./componets/Main/Home/Home";

function App() {
  return (
       <Router>
          <Switch>
             <Route exact="/">
                <Home></Home>
             </Route>
          </Switch>
       </Router>
        
    
  );
}

export default App;

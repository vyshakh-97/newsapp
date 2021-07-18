import React from "react";
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from "./Components/Home";
import Newscontent from "./Components/Newscontent";
function App() {
  
  return (
    <div>
    <BrowserRouter>
        <Switch>
         <Route path="/" exact>
        <Home />
        </Route>  
        <Route path="/newscontent" exact>
        <Newscontent />
        </Route>
        </Switch>
        </BrowserRouter>
    </div>
    )
}
export default App;

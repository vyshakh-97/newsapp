import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Components/Home";
import Newscontent from "./Components/Newscontent";
import { NewsContextProvider } from "./providers/NewsContext";

function App() {
  return (
    <NewsContextProvider>
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
    </NewsContextProvider>
  );
}
export default App;

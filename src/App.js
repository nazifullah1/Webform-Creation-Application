import React from 'react';
import Header from "./components/Header"
import Template from "./components/Template"
import Mainbody from "./components/Mainbody"
import Formheader from "./components/Formheader";
import Centeredtabs from "./components/Tabs";
import Question_form from "./components/Question_form";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Userform from './components/Userform';

function App() {
  return (
    
    <div className= "app">
      <Router>
        <Switch>
        <Route path= "/form/:id">
          <Formheader />
          <Centeredtabs />
          
          </Route>


          <Route path= "/response">
              <Userform />
          </Route>
          
          <Route path= "/">
            <Header />
            <Template />
            <Mainbody />
          </Route>
        </Switch>
      </Router>

    </div>

  );
}
export default App;
import React from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";

import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmissionForm from "./pages/Submit-Article"; 
import NotFoundPage from "./pages/404";
import Search from "./pages/Search";
<li><NavLink exact to = "/">Home</NavLink></li>
const App = () =>  {
    return (
        <Router>
        <div>
          <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
            <ul className="header">
                <li><NavLink exact to = "/">Home</NavLink></li>
                <li><NavLink to = "/SEPractice">Select the Practice</NavLink></li>
                <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>
                <li><NavLink to = "/Search">Search article</NavLink></li>
            </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route  path="/SEPractice" component={SEPractice}/>
            <Route  path="/SubmitArticle" component={SubmissionForm}/>
            <Route  path="/Search" component={Search}/>
            <Route exact path="/404" component={NotFoundPage}/>
            <Redirect to="/" />
          </div>
        </div>
        </Router>
    );
}
export default App;
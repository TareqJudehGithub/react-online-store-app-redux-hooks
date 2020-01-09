import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./pages/homepage/homepage.styles.scss"
// import logo from './logo.svg';
import './App.css';

const HatsPage = () => {
return (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
}

function App() {
  return (
    <div>
      {/* <HomePage /> */}
        <Switch> 
       <Route  exact path="/" component={HomePage}/> 
    
       <Route path="/shop/hats" component={HatsPage}/>
       </Switch>
       
    </div>
  );
}
export default App;

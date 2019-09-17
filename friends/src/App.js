import React from 'react';
import Login from "./components/Login";
import './App.css';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Friends App</h1>
      <Route exact to="/login" component={Login} />
    </div>
  );
}

export default App;

import React from "react";
import './App.css';

import Converter from "./component/js/converter";

import Header from "./component/js/header";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <div id="content">
        <Converter></Converter> 
      </div>
    </React.Fragment>
  );
}

export default App;

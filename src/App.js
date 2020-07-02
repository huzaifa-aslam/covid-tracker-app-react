import React from "react";
import SearchAppBar from './components/NavBar';
import {Cards,Charts,CountryPicker} from './components/index'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar/>
      <Cards/>
    </div>
  );
}

export default App;

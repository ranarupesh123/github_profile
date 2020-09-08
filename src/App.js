import React from "react";
import "./App.css";
import SearchProfile from "./SearchProfile";

function App() {
  return (
    <div className="app">
      <div className="navbar">Github Search</div>
      <div className="search">
        <SearchProfile />
      </div>
    </div>
  );
}

export default App;

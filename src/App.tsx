import Footer from "./mainComponents/Footer";
import Header from "./mainComponents/Header";
import Checklist from "./components/checklist/Checklist";

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Checklist title="To Do" />
      <Checklist title="Shopping" />
      <Checklist />
      <Footer />
    </div>
  );
}

export default App;

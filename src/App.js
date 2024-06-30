import React from "react";
import "./App.css";

import Search from "./Search";
import Header from "./Header";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Search />
      <Header />
      <Forecast />
      <Footer />
    </div>
  );
}

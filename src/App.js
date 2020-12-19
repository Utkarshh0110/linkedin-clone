import React from "react";
import "./App.css";
import Feed from "./appBody/feed/Feed";
import Sidebar from "./appBody/sidebar/Sidebar";
import Header from "./header/Header";

function App() {
  return (
    <div className="app">
      <Header />

      {/* App body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      {/* Sidebar */}
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Google from "./assets/google.png";
import InputBar from "./components/InputBar";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main>
        <div className="img_container">
          <img width={272} src={Google} alt="google" />
        </div>
        <InputBar />

        <div className="btn_wrapper">
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </div>

        <p className="text">
          Google offered in:
          <span>اردو</span>
          <span>پښتو</span>
          <span>سنڌي</span>
        </p>
      </main>

      <footer>
        <p style={{ paddingBottom: "5px" }}>Pakistan</p>
        <hr />
        <div className="footer_list">
          <ul>
            <li>About</li>
            <li>Advertising</li>
            <li>Business</li>
            <li>How Search Works</li>
          </ul>
          <ul>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Settings</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;

import React from 'react';
import './App.css';
import vocabsData from "./data/vocabs.json";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {
        vocabsData.map((v, i) => (
          <div>
            <span>{v.text}</span>
            <span>{v.meaning}</span>
          </div>
        ))
      }
      <Link to="/quiz">퀴즈 풀기</Link>
    </div>
  );
}

export default App;

import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import vocabsData from "./data/vocabs.json";

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
      <button>퀴즈 풀기</button>
    </div>
  );
}

export default App;

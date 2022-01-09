import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Game from "./components/ticTac1/Game";
import Game2 from "./components/ticTac2/Game2";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/React_Tic-tac-toe" element={<Main />} />
          <Route path="/game1" element={<Game />} />
          <Route path="/game2" element={<Game2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Invite from "./Invite"

function App() {
  return (
      <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="invite" element={<Invite />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./style/App.css";
import { path } from "./routers/Path";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path={path.HOME} element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;

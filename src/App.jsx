import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./style/App.css";
import "./style/LibCss.css";
import { path } from "./routers/Path";
import Home from "./pages/Home/Home";
import Homepage from "./pages/HomePage/Homepage";
import Events from "./pages/Events/Events";
import News from "./pages/News/News";
function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path="*" element={<Homepage />} />
          <Route path={path.EVENTS} element={<Events />} />
          <Route path={path.NEWS} element={<News />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

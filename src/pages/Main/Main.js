// Main.js
import React from "react";
import { Routes, Route } from "react-router-dom";
// import Log from "./pages/Log";
import CreateRequestFirst from "../CreateRequestFirst";
import DummyComponent1 from "../Main/DummyComponent1";
import DummyComponent2 from "../Main/DummyComponent2";
// import DummyComponent3 from "./pages/DummyComponent3";

const Main = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Log />} /> */}
      <Route path="/crfirst" element={<CreateRequestFirst />} />
      <Route path="/dummy1" element={<DummyComponent1 />} />
      <Route path="/dummy2" element={<DummyComponent2 />} />
      {/* <Route path="/dummy3" element={<DummyComponent3 />} /> */}
    </Routes>
  );
};

export default Main;

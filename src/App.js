import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./pages/Main/Main";
import NavBarFixed from "./pages/NavBarFixed";
import Dashboard from "./pages/Dashboard";
import CreateRequestFirst from "./pages/CreateRequestFirst";
import Log from "./pages/Log";
import { Routes, Route } from "react-router-dom";
import LayoutFixed from "./pages/LayoutFixed";
import ReportDetails from "./pages/ReportDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Dashboard />
        <Main />
        <NavBarFixed /> */}
        <Routes>
          <Route path="/" element={<Log />} />
          <Route path="/lay" element={<LayoutFixed />} />
          <Route path="/crfirst" element={<CreateRequestFirst />} />
          <Route path="/report" element={<ReportDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

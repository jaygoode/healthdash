import { Routes, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import InfoContainer from "./components/InfoContainer";
import Overview from "./components/Overview";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<InfoContainer />} />
        <Route path="overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

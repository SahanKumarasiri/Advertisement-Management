import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import CarouselView from "./components/Home";
import Dashboard from "./components/Dashboard";
import EditAdvertisement from "./components/EditAdvertisement";
import Report from "./components/Report";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={[<CarouselView />]} />
          <Route path="/home" element={<Dashboard />} />

          <Route path="/edit/:id" element={<EditAdvertisement />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

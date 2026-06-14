import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Trips from "./pages/Trips";
import TripDetails from "./pages/TripDetails";
import Activities from "./pages/Activities";
import Itinerary from "./pages/Itinerary";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <span className="logo">✈ Travel Planner</span>

        <Link to="/">Home</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/itinerary">Itinerary</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/trips/:id" element={<TripDetails />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/itinerary" element={<Itinerary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

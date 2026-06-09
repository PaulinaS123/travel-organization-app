import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import TripDetails from "./pages/TripDetails";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/trips">Trips</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/trips/:id" element={<TripDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

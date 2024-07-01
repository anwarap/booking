import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import FlightHotelPage from "./pages/FlightHotelPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/flight-hotel" element={<FlightHotelPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import DestinationDetails from "./pages/DestinationDetails";

import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Culture from "./pages/Culture";
import Food from "./pages/Food";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:id" element={<DestinationDetails />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/food" element={<Food />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


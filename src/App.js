import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from "./Carousel";
import Assignment1 from "./carousels/Assignment1";
import Assignment2 from "./birthday/Assignment2";
import Assignment3 from "./carousels/Assignment3";
import Assignment4 from "./form/Assignment4";
import Assignment5 from "./currency/Assignment5";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/assignment/1" element={<Assignment1 />} />
        <Route path="/assignment/2" element={<Assignment2 />} />
        <Route path="/assignment/3" element={<Assignment3 />} />
        <Route path="/assignment/4" element={<Assignment4 />} />
        <Route path="/assignment/5" element={<Assignment5 />} />
      </Routes>
    </Router>
  );
};

export default App;

/*
<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Travel Blog
          </h1>
          <Routes>
            <Route path="/" element={<Carousel />} />
            <Route path="/carousel/1" element={<SpecialCarousel />} />
            <Route path="/carousel/2" element={<BirthdayCard />} />
          </Routes>
        </div>
      </div>
*/

import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BibleQuiz from "./pages/BibleQuiz";
import CanadaQuiz from "./pages/CanadaQuiz";
import HongKongQuiz from "./pages/HongKongQuiz";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/bibleQuiz" element={<BibleQuiz/>}/>
          <Route path="/canadaQuiz" element={<CanadaQuiz/>}/>
          <Route path="/hongkongQuiz" element={<HongKongQuiz/>}/>
        </Routes>
      </Router>
  );
}

export default App;

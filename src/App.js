import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BibleQuiz from "./pages/BibleQuiz";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/bibleQuiz" element={<BibleQuiz/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

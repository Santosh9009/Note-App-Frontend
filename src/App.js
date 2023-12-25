import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NoteState from "./Context/NoteState";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <div className="container w-75">

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
}

export default App;

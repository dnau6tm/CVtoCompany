import Home from "./Components/Home/Home"
import './App.css';
import { Route, Routes } from "react-router-dom";
import PersonPage from "./Components/PersonPage/PersonPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal" element={<PersonPage />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./partial/Header";
import Present from "./components/pages/present/Present";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/present" element={<Present />} />
      </Routes>
    </div>
  );
}

export default App;

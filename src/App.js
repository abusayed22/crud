import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./partial/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

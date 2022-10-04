import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Saved from "./Components/Saved";
export const AppContext = createContext();

function App() {
  const [recipes, setRecipes] = useState(null);

  return (
    <div className="App">
      <AppContext.Provider value={{ recipes, setRecipes }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/saved" element={<Saved />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;

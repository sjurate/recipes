import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { createContext, useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Saved from "./Components/Saved";
export const AppContext = createContext();

function App() {
  const [recipes, setRecipes] = useState(null);
  const [savedRecipes, setSavedRecipes] = useState(null);

  useEffect(() => {
    if (savedRecipes === null) {
      const a = localStorage.getItem("savedRecipes");
      if (null === a) {
        setSavedRecipes([]);
      } else {
        setSavedRecipes(JSON.parse(a));
      }
    } else {
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    }
  }, [savedRecipes]);

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          recipes,
          setRecipes,
          savedRecipes,
          setSavedRecipes,
        }}
      >
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

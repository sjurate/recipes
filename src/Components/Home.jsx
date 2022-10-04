import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import SingleRp from "./SingleRp";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [searchBy, setSearchBy] = useState("");

  const { recipes, setRecipes } = useContext(AppContext);

  useEffect(() => {
    if (searchBy.length === 0) {
      return;
    }
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchBy)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.meals);
      })
      .catch((_) => setRecipes("ERROR"));
  }, [searchBy, setRecipes]);

  return (
    <div className="home">
      <div className="search-field">
        <input
          className="search-input"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-button"
          onClick={() => setSearchBy(searchText)}
        >
          Search
        </button>
      </div>
      <div>
        {recipes?.map((r) => (
          <SingleRp key={r.idMeal} recipe={r} />
        ))}
      </div>
    </div>
  );
};

export default Home;

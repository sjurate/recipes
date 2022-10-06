import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import SingleRp from "./SingleRp";
import RecipeModal from "./RecipeModal";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const [modalData, setModalData] = useState(null);

  const { recipes, setRecipes } = useContext(AppContext);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchBy)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.meals);
      })
      .catch((_) => setRecipes("ERROR"));
  }, [searchBy, setRecipes]);

  const search = () => {
    setSearchBy(searchText);
    setSearchText("");
  };

  return (
    <div className="home">
      <div className="search-field">
        <input
          placeholder="Search for recipe..."
          className="search-input"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button className="search-button" onClick={search}>
          Search
        </button>
      </div>
      <div className="recipe-list">
        {recipes?.map((r) => (
          <SingleRp key={r.idMeal} recipe={r} setModalData={setModalData} />
        ))}
      </div>
      <section>
        {modalData && (
          <RecipeModal modalData={modalData} setModalData={setModalData} />
        )}
      </section>
    </div>
  );
};

export default Home;

import React, { useContext } from "react";
import { AppContext } from "../App";

const RecipeModalSaved = ({ recipe, savedModalData, setSavedModalData }) => {
  //const { savedRecipes, setSavedRecipes } = useContext(AppContext);

  const measures = Object.keys(savedModalData)
    .filter((key) => key.includes("strMeasure"))
    .reduce((cur, key) => {
      return Object.assign(cur, { [key]: savedModalData[key] });
    }, {});

  const measuresArr = Object.values(measures);

  const products = Object.keys(savedModalData)
    .filter((key) => key.includes("strIngredient"))
    .reduce((cur, key) => {
      return Object.assign(cur, { [key]: savedModalData[key] });
    }, {});

  const productsArr = Object.values(products);

  const instructionsArr = savedModalData.strInstructions.split("\r\n");

  const saveRecipe = () => {
    //   if (savedRecipes === null) {
    //     setSavedRecipes([modalData]);
    //   } else {
    //     setSavedRecipes((prev) => [...prev, modalData]);
    //   }
  };

  return (
    <div className="recipe-card">
      <button onClick={() => setSavedModalData(null)}>X</button>
      <div className="recipe-card-heading">
        <h3>{savedModalData.strMeal}</h3>
        <svg className="heart-svg" onClick={saveRecipe}>
          <use xlinkHref="#heart"></use>
        </svg>
      </div>
      <img
        className="recipe-image"
        src={savedModalData.strMealThumb}
        alt={savedModalData.strMeal}
      />
      <h4>Ingredients: </h4>
      <div className="ingredients">
        <div className="measures">
          {measuresArr.map((m, i) => (
            <div key={i}>{m}</div>
          ))}
        </div>
        <div className="products">
          {productsArr.map((p, i) => (
            <div key={i}>{p}</div>
          ))}
        </div>
      </div>

      <div className="instructions">
        {instructionsArr.map((a, i) =>
          a.length > 3 ? <div key={i}>{a}</div> : null
        )}
      </div>
    </div>
  );
};

export default RecipeModalSaved;

import React, { useContext } from "react";
import { AppContext } from "../App";

const RecipeModal = ({ recipe, modalData, setModalData }) => {
  const { savedRecipes, setSavedRecipes } = useContext(AppContext);

  const measures = Object.keys(modalData)
    .filter((key) => key.includes("strMeasure"))
    .reduce((cur, key) => {
      return Object.assign(cur, { [key]: modalData[key] });
    }, {});

  const measuresArr = Object.values(measures);

  const products = Object.keys(modalData)
    .filter((key) => key.includes("strIngredient"))
    .reduce((cur, key) => {
      return Object.assign(cur, { [key]: modalData[key] });
    }, {});

  const productsArr = Object.values(products);

  const instructionsArr = modalData.strInstructions.split("\r\n");

  const saveRecipe = () => {
    if (savedRecipes === null) {
      setSavedRecipes([modalData]);
    } else {
      setSavedRecipes((prev) => [...prev, modalData]);
    }
  };

  return (
    <div className="recipe-card">
      <button onClick={() => setModalData(null)}>X</button>
      <div className="recipe-card-heading">
        <h3>{modalData.strMeal}</h3>
        <svg className="heart-svg" onClick={saveRecipe}>
          <use xlinkHref="#heart"></use>
        </svg>
      </div>
      <img
        className="recipe-image"
        src={modalData.strMealThumb}
        alt={modalData.strMeal}
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

export default RecipeModal;

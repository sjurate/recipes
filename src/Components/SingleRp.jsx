import React from "react";

const SingleRp = ({ recipe }) => {
  const measures = Object.keys(recipe)
    .filter((key) => key.includes("strMeasure"))
    .reduce((cur, key) => {
      return Object.assign(cur, { [key]: recipe[key] });
    }, {});

  const measuresArr = Object.values(measures);

  const products = Object.keys(recipe)
    .filter((key) => key.includes("strIngredient"))
    .reduce((cur, key) => {
      return Object.assign(cur, { [key]: recipe[key] });
    }, {});

  const productsArr = Object.values(products);

  const instructionsArr = recipe.strInstructions.split("\r\n");

  return (
    <div className="recipe-card">
      <h3>{recipe.strMeal}</h3>
      <img
        className="recipe-image"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
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

      <p>
        {instructionsArr.map((a, i) =>
          a.length > 3 ? <div key={i}>{a}</div> : null
        )}
      </p>
    </div>
  );
};

export default SingleRp;

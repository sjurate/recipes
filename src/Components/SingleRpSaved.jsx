import React from "react";

const SingleRpSaved = ({ recipe, setSavedModalData }) => {
  const showModal = () => {
    setSavedModalData(recipe);
  };

  return (
    <div className="recipe-card-mini" onClick={showModal}>
      <h3>{recipe.strMeal}</h3>
      <img
        className="recipe-image-mini"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
    </div>
  );
};

export default SingleRpSaved;

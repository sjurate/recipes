import React from "react";

const SingleRp = ({ recipe, setModalData }) => {
  const showModal = () => {
    setModalData(recipe);
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

export default SingleRp;

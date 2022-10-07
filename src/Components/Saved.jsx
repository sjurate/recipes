import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import SingleRpSaved from "./SingleRpSaved";
import RecipeModalSaved from "./RecipeModalSaved";

const Saved = () => {
  const [savedModalData, setSavedModalData] = useState(null);

  const { savedRecipes } = useContext(AppContext);

  console.log(savedModalData);

  return (
    <div className="saved-recipes">
      <div className="recipe-list">
        {[
          ...new Map(
            savedRecipes?.map((item) => [item["strMeal"], item])
          ).values(),
        ].map((r) => (
          <SingleRpSaved
            key={r.idMeal}
            recipe={r}
            setSavedModalData={setSavedModalData}
          />
        ))}
      </div>
      <section>
        {savedModalData && (
          <RecipeModalSaved
            savedModalData={savedModalData}
            setSavedModalData={setSavedModalData}
          />
        )}
      </section>
    </div>
  );
};

export default Saved;

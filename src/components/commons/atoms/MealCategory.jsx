const MealCategory = ({ strMeal, strMealThumb }) => {
  return (
    <div className='recipe'>
      <h2 className='recipe-title'>{strMeal}</h2>
      <img className='recipe-img' src={strMealThumb} alt={strMeal} />
    </div>
  );
};

export default MealCategory;

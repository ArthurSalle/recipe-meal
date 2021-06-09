const Meal = ({ strMeal, strMealThumb, strTags }) => {
  return (
    <div className='recipe'>
      <h2 className='recipe-title'>{strMeal}</h2>
      <p className='recipe-tags'>{strTags}</p>
      <img className='recipe-img' src={strMealThumb} alt={strMeal} />
    </div>
  );
};

export default Meal;

import { useEffect, useState } from 'react';
import axios from 'axios';
import Meal from '../commons/atoms/Meal';
import MainLayout from '../layout/MainLayout';

const MealList = () => {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => {
        setMeal(response.data.meals);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MainLayout />
      <div>
        {meal.map((el) => (
          <Meal
            key={el.idMeal}
            strMeal={el.strMeal}
            strArea={el.strArea}
            strMealThumb={el.strMealThumb}
            strTags={el.strTags}
            strCategory={el.strCategory}
          />
        ))}
      </div>
    </>
  );
};

export default MealList;

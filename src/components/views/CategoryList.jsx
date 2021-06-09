import { useEffect, useState } from 'react';
import axios from 'axios';
import MainLayout from '../layout/MainLayout';
import MealCategory from '../commons/atoms/MealCategory';

const CategoryList = ({ category }) => {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${{ category }}`
      )
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
          <MealCategory
            key={el.idMeal}
            strMeal={el.strMeal}
            strMealThumb={el.strMealThumb}
          />
        ))}
      </div>
    </>
  );
};

export default CategoryList;

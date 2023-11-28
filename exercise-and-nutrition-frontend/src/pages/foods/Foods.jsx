import React, {useState, useEffect} from 'react'
import "./food.css"
import { getFiltered } from '../../services/search';
import FoodCard from '../../components/food_card/FoodCard';
import { getAllFoods } from '../../services/api';
import SkeletonFood from '../../components/skeleton_food/SkeletonFood';

const sampleFoodData = [
  {
    "name": "Cranberry Apple Granola Bites",
    "diet": "balanced",
    "meal_type": "breakfast",
    "cal": 274,
    "fat": 11,
    "carb": 42,
    "protein": 7
  },
  {
    "name": "Whole Wheat Quinoa Flour Pancakes recipes",
    "diet": "balanced",
    "meal_type": "breakfast",
    "cal": 233,
    "fat": 7,
    "carb": 32,
    "protein": 9
  },
  {
    "name": "Pumpkin French Toast Recipe",
    "diet": "balanced",
    "meal_type": "breakfast",
    "cal": 156,
    "fat": 5,
    "carb": 21,
    "protein": 8
  },
  {
    "name": "Almond Butter Quinoa Granola recipes",
    "diet": "balanced",
    "meal_type": "breakfast",
    "cal": 660,
    "fat": 27,
    "carb": 88,
    "protein": 21
  },
  {
    "name": "Cheesy Leftover Mashed Potato Pancakes r2",
    "diet": "balanced",
    "meal_type": "breakfast",
    "cal": 123,
    "fat": 6,
    "carb": 15,
    "protein": 4
  },
  {
    "name": "Popovers recipes",
    "diet": "balanced",
    "meal_type": "breakfast",
    "cal": 142,
    "fat": 6,
    "carb": 18,
    "protein": 6
  },
  {
    "name": "Cinnamon French Toast",
    "diet": "balanced",
    "meal_type": "breakfast",
    "cal": 204,
    "fat": 9,
    "carb": 21,
    "protein": 7
  },
  {
    "name": "Healthy Chinese Food: 5 Must-Have Ingredients to Include in Your Diet",
    "diet": "balanced",
    "meal_type": "breakfast",
    "cal": 205,
    "fat": 7,
    "carb": 29,
    "protein": 5
  },
  {
    "name": "Simple Spelt Pancakes recipes",
    "diet": "balanced",
    "meal_type": "breakfast",
    "cal": 311,
    "fat": 10,
    "carb": 47,
    "protein": 10
  }
]


const Foods = () => {
  const [text, setText] = useState("");
  const [foods, setFoods] = useState([])

  const filteredItems = getFiltered(text, foods)

  const [loading, setLoading] = useState(true)

  const data = Array.from({ length: 30 }, (_, index) => ({
    key: index + 1,
    text: `Component ${index + 1}`,
  }));

  useEffect(() => {
    getAllFoods(setLoading).then((foods) => setFoods(foods))
  }, []);

  return (
    <div className="food-section">
    <div className="food-title">
      <h3>Foods</h3>
      <div className="search">
        <input type="text" placeholder='Search...' onChange={(e) => setText(e.target.value)}/>
      </div>
    </div>
    <div className="food-card">{ loading ? data.map((item, index) => {
      return <SkeletonFood data={item} key={index}/>
    }) :
      filteredItems.map((food, index) => {
        return <FoodCard food={food} key={index}/>
      })
      }

    </div>
  </div>
  )
}

export default Foods
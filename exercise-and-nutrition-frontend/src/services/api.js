import axios from "axios";

/* Users */

export const getAllUsers = async (
  setLoading = undefined,
  limit = 999,
  random = false
) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8080/exercise-and-nutrition-api/v3/users?limit=${limit}&randomize=${random}`,
      { mode: "cors" }
    );
    setLoading(false);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

/* All about exercises */
export const getAllExercises = async (
  setLoading = undefined,
  limit = 999,
  random = false
) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8080/exercise-and-nutrition-api/v3/exercises?limit=${limit}&randomize=${random}`,
      { mode: "cors" }
    );
    if (setLoading) {
      setLoading(false);
    }
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getExercisesByBodyPart = async (
  bodyPart,
  limit = 9999,
  random = false,
) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8080/exercise-and-nutrition-api/v3/exercises/body_part/${bodyPart}?limit=${limit}&randomize=${random}`,
      { mode: "cors" }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getExercisesByTarget = async (
  target,
  limit = 9999,
  random = false,
) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8080/exercise-and-nutrition-api/v3/exercises/target/${target}?limit=${limit}&randomize=${random}`,
      { mode: "cors" }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

/* All about foods */

export const getAllFoods = async (setLoading) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8080/exercise-and-nutrition-api/v3/foods`,
      { mode: "cors" }
    );
    setLoading(false);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getFoodsByNutrition = async (
  nutrition,
  limit = 9999,
  random = false,
) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8080/exercise-and-nutrition-api/v3/foods/diet/${nutrition}?limit=${limit}&randomize=${random}`,
      { mode: "cors" }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getFoodsByMealType = async (
  mealType,
  limit = 9999,
  random = false,
) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8080/exercise-and-nutrition-api/v3/foods/meal_type/${mealType}?limit=${limit}&randomize=${random}`,
      { mode: "cors" }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getRepsAndSet = async (goal) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8080/exercise-and-nutrition-api/v3/reps_set/goal/${goal}`,
      { mode: "cors" }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getNutrition = async (goal) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8080/exercise-and-nutrition-api/v3/nutrition/goal/${goal}`,
      { mode: "cors" }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

import React, { useState, useEffect } from 'react'
import "./user-card.css"
import maleImg from "../../images/male.png"
import femaleImg from "../../images/female.png"
import Modal from '@mui/material/Modal';
import { calculateBMR } from '../../services/caloriesCalculate';
import { getRepsAndSet, getNutrition, getExercisesByBodyPart, getExercisesByTarget, getAllExercises, getFoodsByNutrition } from '../../services/api';
import ExerciseCard from '../exercise_card/ExerciseCard';
import FoodCard from '../food_card/FoodCard';
import SkeletonExercise from '../../components/skeleton_exercise/SkeletonExercise';
import SkeletonFood from '../skeleton_food/SkeletonFood';
import Skeleton from '@mui/material/Skeleton';

const UserCard = (props) => {
    const { user } = props;
    const calPerDay = calculateBMR(user.gender, user.age, user.weight, user.height)

    const [open, setOpen] = useState(false)

    const [repsAndSet, setRepsAndSet] = useState([])
    const [nutrition, setNutrition] = useState([])
    const [exercises, setExercises] = useState([])
    const [foods, setFoods] = useState([])

    const [lowCarb, setLowCarb] = useState([])
    const [lowFat, setLowFat] = useState([])

    const [loading, setLoading] = useState(true)

    const handleOpen = () => {
        if (!open) { setOpen(true); }

    }
    const handleClose = () => {
        setOpen(false)
    }

    const data = Array.from({ length: 20 }, (_, index) => ({
        key: index + 1,
        text: `Component ${index + 1}`,
    }));

    useEffect(() => {
        const callAPI = async () => {
            try {
                if (repsAndSet.length === 0) {
                    await getRepsAndSet(user.goal).then(data => setRepsAndSet(data[0]));
                }

                if (exercises.length === 0) {
                    if (user.target === "All") {
                        await getAllExercises(undefined, 20, true).then(data => setExercises(data));
                    } else {
                        await getExercisesByBodyPart(user.target, 20, true).then(async (data) => {
                            if (data.length === 0) {
                                await getExercisesByTarget(user.target, 20, true).then(item => setExercises(item));
                            }
                            else {
                                setExercises(data)
                            }

                            
                        });

                    }
                }

                if (nutrition.length === 0) {
                    await getNutrition(user.goal).then(async (data) => {
                        setNutrition(data)

                        if (user.goal === "Loosing weight") {
                            if (data.length > 1) {
                                await getFoodsByNutrition(data[0].nutrition_recomend, 10, true).then(data => setLowCarb(data));
                                await getFoodsByNutrition(data[1].nutrition_recomend, 10, true).then(data => setLowFat(data));
                            }
                        } else {
                            if (data.length > 0) {
                                await getFoodsByNutrition(data[0].nutrition_recomend, 20, true).then(data => setFoods(data));
                            }
                        }

                    });
                }

                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        callAPI();
    }, []);



    return (
        <div className="user-section">
            <div className="col-1">
                {user.gender === "Male" ? <img src={maleImg} alt="" /> : <img src={femaleImg} alt="" />}
            </div>


            <div className="col-2">
                <div className="user-info">
                    <h3>{user.name}</h3>
                    <div className="user-detail">
                        <table>

                            <tr>
                                <td>Gender</td>
                                <td>{user.gender}</td>

                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>{user.age}</td>
                            </tr>

                            <tr>

                                <td>Weight</td>
                                <td>{user.weight}</td>
                            </tr>

                            <tr>

                                <td>Height</td>
                                <td>{user.height}</td>
                            </tr>

                            <tr>

                                <td>Goal</td>
                                <td>{user.goal}</td>
                            </tr>

                            <tr>
                                <td>BodyPartTarget</td>
                                <td>{user.target}</td>
                            </tr>

                            <tr>

                                <td>Level</td>
                                <td>{user.level}</td>
                            </tr>


                        </table>

                    </div>
                </div>
                <div className="line"></div>
                <div className='analyze'>
                    <div className='analyze-button' onClick={handleOpen}>ANALYZE</div>
                </div>
            </div>
            <Modal
                disableEnforceFocus
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="recommend">
                    <div className="item-1">
                        {user.gender === "Male" ? <img src={maleImg} alt="" /> : <img src={femaleImg} alt="" />}
                        <h3 className='title detail-padding'> {user.name}</h3>
                        <div className="user-detail detail-padding">
                            <table>

                                <tr>
                                    <td>Gender</td>
                                    <td>{user.gender}</td>

                                </tr>
                                <tr>
                                    <td>Age</td>
                                    <td>{user.age}</td>
                                </tr>

                                <tr>

                                    <td>Weight</td>
                                    <td>{user.weight}</td>
                                </tr>

                                <tr>

                                    <td>Height</td>
                                    <td>{user.height}</td>
                                </tr>

                                <tr>

                                    <td>Goal</td>
                                    <td>{user.goal}</td>
                                </tr>

                                <tr>
                                    <td>BodyPartTarget</td>
                                    <td>{user.target}</td>
                                </tr>

                                <tr>

                                    <td>Level</td>
                                    <td>{user.level}</td>
                                </tr>


                            </table>

                        </div>
                        <h4 className='cal-day detail-padding'>{calPerDay}</h4>
                    </div>
                    <div className="item-2">
                        <div className='recommend-title'>
                            <h3>EXERCISE RECOMMEND</h3>
                            <div className='rep-set'>
                                {loading ? <Skeleton animation="wave" variant="text" sx={{ fontSize: '12px' }} width="100%" />
                                    : <>
                                        <p>{repsAndSet.sets} set</p>
                                        <p>{repsAndSet.reps} reps/set</p>
                                        <p>{repsAndSet.rest} minutes</p>
                                        <p>{repsAndSet.weight_lifting}</p>
                                        <p>{repsAndSet.stretching}</p>

                                    </>}
                            </div>
                        </div>
                        <div className='exercise-recommend'>
                            {loading ? data.map((item, index) => { return <SkeletonExercise item={item} key={index} /> }) : exercises.map((exercise) => <ExerciseCard exercise={exercise} />)}
                        </div>
                    </div>
                    <div className="item-3">
                        <div className='recommend-title'>
                            <h3>FOOD RECOMMEND</h3>
                            <div className='nutrition-recommend'>
                                {loading ? <Skeleton animation="wave" variant="text" sx={{ fontSize: '12px' }} width="100%" /> :
                                    <>
                                        <p>
                                            {nutrition.map((item => item.nutrition_recomend + " "))}
                                        </p>
                                        <p>{nutrition.length === 0 ? "" : nutrition[0].exercise_recommend}</p>
                                    </>
                                }
                            </div>
                        </div>
                        <div className='food-recommend'>
                            {
                                loading ? data.map((item, index) => {
                                    return <SkeletonFood data={item} key={index} />
                                }) :
                                    user.goal === "Loosing weight" ? (
                                        <>
                                            {lowCarb.map((food) => <FoodCard key={food.id} food={food} />)}
                                            {lowFat.map((food) => <FoodCard key={food.id} food={food} />)}
                                        </>
                                    ) : (
                                        foods.map((food) => <FoodCard key={food.id} food={food} />)
                                    )
                            }
                        </div>
                    </div>


                </div>
            </Modal>
        </div>
    )
}

export default UserCard
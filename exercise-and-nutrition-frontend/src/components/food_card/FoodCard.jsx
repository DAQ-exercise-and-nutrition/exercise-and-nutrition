import React from 'react'
import "./food-card.css"

const FoodCard = (props) => {
    const { food } = props

    
    return (
        <div className='food-detail'>
            <h3 className='title'>{food.name}</h3>
            <h3 className='cal'>{food.cal}</h3>
            <div className="nutrition-detail">
                <table>

                    <tr>
                        <td><span><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 6.5C12.5 9.81371 9.81371 12.5 6.5 12.5C3.18629 12.5 0.5 9.81371 0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5C9.81371 0.5 12.5 3.18629 12.5 6.5Z" fill="#7BCA25" />
                        </svg>
                        </span> PROTEIN</td>
                        <td>{food.protein} g</td>

                    </tr>
                    <tr>
                        <td> <span><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6.5" cy="6.5" r="6" fill="#FFBE60" />
                        </svg>
                        </span> FAT</td>
                        <td>{food.fat} g</td>
                    </tr>

                    <tr>

                        <td><span>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6.5" cy="6.5" r="6" fill="#F24647" />
                            </svg>
                        </span> CARB</td>
                        <td>{food.carb} g</td>
                    </tr>

                    <tr>

                        <td>Meal type</td>
                        <td>{food.meal_type}</td>
                    </tr>

                    <tr>

                        <td>Diet</td>
                        <td>{food.diet}</td>
                    </tr>

                </table>
            </div>
        </div>
    )
}

export default FoodCard
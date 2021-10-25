import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import SelectedFood from '../SelectedFood/SelectedFood';
import './Foods.css';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => {
                setFoods(data.meals)
                // console.log(data);
            })
    }, []);

    const [selectedFood, setSelectedFood] = useState([]);
    const handleDetail = id => {
        // console.log(id);
        // console.log(foods);
        for (const food of foods) {
            if (food.idMeal === id) {
                setSelectedFood(food);
            }
        }
    }

    return (
        <div >
            <div>
                <SelectedFood
                    selectedFood={selectedFood}
                />
            </div>
            <div className="foods">
                {
                    foods.map(food => <Food
                        key={food.idMeal}
                        food={food}
                        handleDetail={handleDetail}
                    />)
                }
            </div>

        </div>
    );
};

export default Foods;
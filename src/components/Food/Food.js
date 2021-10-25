import React from 'react';
import './Food.css';

const Food = (props) => {
    const { idMeal, strArea, strMeal, strSource, strInstructions, strMealThumb } = props.food;
    return (

        <div id="food" class="row row-cols-1 g-4">
            <div class="col">
                <div class="card h-100">
                    <img src={strMealThumb} class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">{strMeal}</h5>
                        <p class="card-text">{strInstructions.slice(0, 300) + '...'}</p>
                        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => props.handleDetail(idMeal)}><i class="fas fa-calendar-week"></i> Food Details</button>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Food;
import React from 'react';
import './SelectedFood.css';
const SelectedFood = (props) => {
    console.log(props);
    const { idMeal, strArea, strMeal, strSource, strCategory, strInstructions, strMealThumb, strYoutube } = props.selectedFood;
    console.log(strMeal);
    return (
        <div>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">{strMeal}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <img src={strMealThumb} alt="" height="350px" width="465px" />
                            <hr />
                            <p ><small id="zone">Zone: {strArea}</small><small id="category" className="position-absolute end-0">Cateogry: {strCategory}</small></p>
                            <p>{strInstructions}</p>
                            <div class="d-grid gap-2">
                                <a href={strYoutube} class="btn btn-success" type="button"><i class="fab fa-youtube"></i> Video Link</a>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"><i class="far fa-times-circle"></i> Close</button>
                            <button type="button" class="btn btn-secondary"><i class="far fa-check-circle"></i> Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedFood;
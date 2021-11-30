import React from 'react';
import { Link } from'react-router-dom'

const SearchRecipe = ({meals}) => {
    console.log(meals)
    if(!meals.length) {
        return <h2>grrr.... no meals for you!</h2>
    }
    return (
        <div className="Container">
            {meals.map(meals =>
            <Link to ={`/recipe/${meals.idMeal}`} key={meals.idMeal}>
                <div className="box">
                    <li>{meals.strMeal}</li> 
                </div>
            </Link>    
            )}
        </div>
    );
};

export default SearchRecipe;
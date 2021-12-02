import React from 'react';
import { Link } from'react-router-dom'
import '../App.css'

const SearchRecipe = ({meals}) => {
    console.log(meals)
    if(!meals.length) {
        return <div className="nomeal">grrr.... no meals for you!</div>
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
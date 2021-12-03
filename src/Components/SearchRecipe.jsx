import React from 'react';
import { Link } from'react-router-dom'

const SearchRecipe = ({meals}) => {
    console.log(meals)
    if (!meals) {
        return <div className="nomeal">GRRRRR.... No Recipes for you!</div>        
    }
    else{
    return (
        <div className=" Container">
            {meals.map(meals =>
            <Link to ={`/recipe/${meals.idMeal}`} key={meals.idMeal}>
                <div className="searchbox">
                    <div>
                        <img img src={meals.strMealThumb} 
                                alt={meals.strMeal} 
                                className='searchImage'/>
                    <h4>{meals.strMeal}</h4> 
                    </div>
                </div>
            </Link>    
            )}
        </div>
    );
            }
};

export default SearchRecipe;
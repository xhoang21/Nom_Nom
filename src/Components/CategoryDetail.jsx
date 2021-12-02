import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import '../App.css'

function CategoryDetail(props) { 
    const [meals, SetMeals] = useState([])
    const Url = `https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_themealdb_KEY}/filter.php?c=${props.match.params.strCategory}`
    useEffect (() => {
        console.log(Url)
        fetch (Url)
        .then(res => {
            if(res.ok){
                return res.json()
            }
        })
        .then(json =>{
            console.log(json)
            SetMeals(json.meals)
        })
        .catch(err => console.log('oooo you did somthing wrong', err))
    }, [] )
    return (
        meals &&
        <div className='Container'>
            {meals.map((meals) =>
                <Link to ={`/recipe/${meals.idMeal}`} key={meals.idMeal}>
                    <div className="box">
                        <div className='mealImage'>
                            <img src={meals.strMealThumb} 
                                alt={meals.strMeal}
                                />
                        </div>
                        <div className='MealName'>
                            <h3>{meals.strMeal}</h3>                            
                        </div>
                    </div>
                </Link>    
                )}
            
            
            
        </div>
    );
}

export default CategoryDetail;
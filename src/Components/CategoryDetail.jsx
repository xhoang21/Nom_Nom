import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom'

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
    }, )
    return (
        meals &&
        <div className='detailsContainer'>
            {meals.map((meals) =>
                <Link to ={`/recipe/${meals.idMeal}`} key={meals.idMeal}>
                    <div className="mealbox">
                        <div className='mealimg'>
                            <img src={meals.strMealThumb} 
                                alt={meals.strmeal}
                                />
                        </div>
                        <div className='mealName'>
                            <h3>{meals.strmeal}</h3>
                            
                        </div>
                    </div>
                </Link>    
                )}
            
            
            
        </div>
    );
}

export default CategoryDetail;
import React, { useEffect, useState }from 'react';
import { Link } from "react-router-dom"


function Latest(props) {
    const [meals, SetMeals] = useState([])
    const Url = `https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_themealdb_KEY}/latest.php`
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
        <div>
        <h2>Top 10 Newest Recipe! </h2>
        <div className='Container'>
            {meals.map((meals) =>
                <Link to= {`/recipe/${meals.idMeal}`} key={meals.idMeal}>
                    <div className="latestbox">
                        <div >
                            <img src={meals.strMealThumb} 
                                alt={meals.strMeal} 
                                className='latestimg'
                                />                                
                        </div>
                        <div className='latestname'>
                            <h3>{meals.strMeal}</h3>                            
                        </div>
                    </div>
                </Link>   
                )}
            
            
            
        </div>
        </div>
    );
}

export default Latest;
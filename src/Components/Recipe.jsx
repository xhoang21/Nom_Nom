import React, {useEffect, useState} from 'react';

function Recipe(props) {
    const [meals,setMeals] = useState([])
    const Url = `https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_themealdb_KEY}/lookup.php?i=${props.match.params.idMeal}`
    useEffect(() => {
        console.log(Url)
        fetch(Url)
        .then(res => {
            if(res.ok){
                return res.json()
            }
            console.log(res.json)
        })
        
        .then(json =>{
            console.log(json)
            setMeals(json.meals)
        })
        .catch(err => console.log("you screwed up again", err))
    })
    return (
        <div>
            {meals.map((meals =>
            <div>
                <div className="mealImg">
                    <img src={meals.strMealThumb} alt={meals.strMeal} />
                </div>    
                <div>
                    <h3>{meals.strMeal}</h3>
                    <p>Ingredients</p>
                    <br />
                    <p>{meals.strIngredient1}</p>
                </div>
                </div>
                ))}
        </div>
    );
}

export default Recipe;
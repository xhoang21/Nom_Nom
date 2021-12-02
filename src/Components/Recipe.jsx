import React, {useEffect, useState} from 'react';
import '../App.css'

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
    },[])
    return (
        <div>
            {meals.map((meals =>
            <div className ="box">
                <div className="mealImage">
                    <img src={meals.strMealThumb} alt={meals.strMeal} />
                </div>
                <div className="MealName"> 
                 <h4>{meals.strMeal}</h4> 
                <div className="Container">
                    
                    <div className="ingredeientList">
                    <h4>Ingredients</h4>  
                        <ol>  
                        <li>{meals.strMeasure1} {meals.strIngredient1}</li>
                        <li>{meals.strMeasure2} {meals.strIngredient2}</li>
                        <li>{meals.strMeasure3} {meals.strIngredient3}</li>
                        <li>{meals.strMeasure4} {meals.strIngredient4}</li>
                        <li>{meals.strMeasure5} {meals.strIngredient5}</li>
                        <li>{meals.strMeasure6} {meals.strIngredient6}</li>
                        <li>{meals.strMeasure7} {meals.strIngredient7}</li>
                        <li>{meals.strMeasure8} {meals.strIngredient8}</li>
                        <li>{meals.strMeasure9} {meals.strIngredient9}</li>
                        <li>{meals.strMeasure10} {meals.strIngredient10}</li>
                        <li>{meals.strMeasure11} {meals.strIngredient11}</li>
                        <li>{meals.strMeasure12} {meals.strIngredient12}</li>
                        <li>{meals.strMeasure13} {meals.strIngredient13}</li>
                        <li>{meals.strMeasure14} {meals.strIngredient14}</li>
                        <li>{meals.strMeasure15} {meals.strIngredient15}</li>
                        <li>{meals.strMeasure16} {meals.strIngredient16}</li>
                        <li>{meals.strMeasure17} {meals.strIngredient17}</li>
                        <li>{meals.strMeasure18} {meals.strIngredient18}</li>
                        <li>{meals.strMeasure19} {meals.strIngredient19}</li>
                        <li>{meals.strMeasure20} {meals.strIngredient20}</li>
                       
                        </ol>    
                    </div>
                    <div className="instructions">
                        <h4>Instructions</h4>
                        <p>{meals.strInstructions}</p>
                    </div>
                </div>
                 </div>  
                </div>
                ))}
        </div>
    );
}

export default Recipe;
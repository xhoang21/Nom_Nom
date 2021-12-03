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
            <div className ="Recipebox">
                <div >
                    <img src={meals.strMealThumb} alt={meals.strMeal} className="RecipeImage" />
                </div>
                <div className="MealName"> 
                 <h4>{meals.strMeal}</h4> 
                <div className="RecipeContainer">
                    
                    <div className="ingredeientList">
                    <h4>Ingredients</h4>  
                          
                        {meals.strMeasure1} {meals.strIngredient1}
                        <br />
                        {meals.strMeasure2} {meals.strIngredient2}
                        <br />
                        {meals.strMeasure3} {meals.strIngredient3}
                        <br />
                        {meals.strMeasure4} {meals.strIngredient4}
                        <br />
                        {meals.strMeasure5} {meals.strIngredient5}
                        <br />
                        {meals.strMeasure6} {meals.strIngredient6}
                        <br />
                        {meals.strMeasure7} {meals.strIngredient7}
                        <br />
                        {meals.strMeasure8} {meals.strIngredient8}
                        <br />
                        {meals.strMeasure9} {meals.strIngredient9}
                        <br />
                        {meals.strMeasure10} {meals.strIngredient10}
                        <br />
                        {meals.strMeasure11} {meals.strIngredient11}
                        <br />
                        {meals.strMeasure12} {meals.strIngredient12}
                        <br />
                        {meals.strMeasure13} {meals.strIngredient13}
                        <br />
                        {meals.strMeasure14} {meals.strIngredient14}
                        <br />
                        {meals.strMeasure15} {meals.strIngredient15}
                        <br />
                        {meals.strMeasure16} {meals.strIngredient16}
                        <br />
                        {meals.strMeasure17} {meals.strIngredient17}
                        <br />
                        {meals.strMeasure18} {meals.strIngredient18}
                        <br />
                        {meals.strMeasure19} {meals.strIngredient19}
                        <br />
                        {meals.strMeasure20} {meals.strIngredient20}     
                    </div>
                    <div className="instructions">
                        <h4>Instructions</h4>
                        <h3>{meals.strInstructions}</h3>
                    </div>
                </div>
                </div>  
                </div>
                ))}
        </div>
    );
}

export default Recipe;
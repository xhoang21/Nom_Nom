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
            <div className ="box">
                <div className="mealImg">
                    <img src={meals.strMealThumb} alt={meals.strMeal} />
                </div>    
                <div>
                    <h3>{meals.strMeal}</h3>
                    <div className="ingredeientList">
                    <h4>Ingredients</h4>    
                       <il><span>{meals.strIngredient1}{meals.strMeasure1}</span></il>
                       <il><span>{meals.strIngredient2}{meals.strMeasure2}</span></il> 
                       <il><span>{meals.strIngredient3}{meals.strMeasure3}</span></il> 
                       <il><span>{meals.strIngredient4}{meals.strMeasure4}</span></il> 
                       <il><span>{meals.strIngredient5}{meals.strMeasure5}</span></il> 
                       <il><span>{meals.strIngredient6}{meals.strMeasure6}</span></il> 
                       <il><span>{meals.strIngredient7}{meals.strMeasure7}</span></il> 
                       <il><span>{meals.strIngredient8}{meals.strMeasure8}</span></il>
                       <il><span>{meals.strIngredient9}{meals.strMeasure9}</span></il>
                       <il><span>{meals.strIngredient10}{meals.strMeasure10}</span></il> 
                       <il><span>{meals.strIngredient11}{meals.strMeasure11}</span></il>
                       <il><span>{meals.strIngredient12}{meals.strMeasure12}</span></il> 
                       <il><span>{meals.strIngredient13}{meals.strMeasure13}</span></il> 
                       <il><span>{meals.strIngredient14}{meals.strMeasure14}</span></il> 
                       <il><span>{meals.strIngredient15}{meals.strMeasure15}</span></il> 
                       <il><span>{meals.strIngredient16}{meals.strMeasure16}</span></il> 
                       <il><span>{meals.strIngredient17}{meals.strMeasure17}</span></il> 
                       <il><span>{meals.strIngredient18}{meals.strMeasure18}</span></il> 
                       <il><span>{meals.strIngredient19}{meals.strMeasure19}</span></il> 
                       <il><span>{meals.strIngredient20}{meals.strMeasure20}</span></il> 
                    </div>
                    <div className="instructions">
                        <h5>Instructions</h5>
                        <p>{meals.strInstructions}</p>
                    </div>
                </div>
                </div>
                ))}
        </div>
    );
}

export default Recipe;
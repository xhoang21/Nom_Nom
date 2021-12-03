import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import "../App.css"

function Categories(props) {
    
    const [categories, setCategories] = useState([])
    useEffect(() => {
        console.log(`https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_themealdb_KEY}/categories.php`)
        fetch (`https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_themealdb_KEY}/categories.php`)
        .then (res => {
            if(res.ok) {
                console.log("success", res)
                return res.json();
            }
        })
        .then(json => {
            console.log("okay", json)  
            setCategories(json.categories)                                                         
        })
        .catch(err => console.log('nooooo, what did I do!', err)
        )
    },[])
    console.log(categories)
        return (
            <section className="Container">
                {categories.map((categories) => (
                    <Link to ={`/CategoryDetail/${categories.strCategory}`} key={categories.strCategory}>
                        <div className="catebox">
                            <div >
                                <img src={categories.strCategoryThumb} 
                                alt={categories.strCategory} 
                                className="mealImage"/>
                            </div>
                            <div>
                                <h4>{categories.strCategory}</h4>
                                
                            </div>
                        </div>
                    </Link>    
                    
            ))} 
            </section>
        );
}

export default Categories;
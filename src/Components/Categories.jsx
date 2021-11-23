import React, {useEffect, useState} from 'react';


function Categories(props) {
    
    const Url = `https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_themealdb_KEY}/categories.php`
    const [Categories, setCategories] = useState([])
    useEffect(() => {
        console.log(Url)
        fetch (Url)
        .then (res => {
            if(res.ok) {
                console.log("success", res)
                return res.json();
            }
                
        })
        .then(json => {
            
            console.log("okay", json)  
            // setCategories(json)  
                                                        
        })
        .catch(err => console.log('nooooo, what did I do!', err)
        )
    },[])
    return (
        <section className="container">
        
            <div className="card">
                <div className="card-image">
                <img src="https:\/\/www.themealdb.com\/images\/category\/beef.png" alt="Beef" />
                </div>
                <div className="strCategory">
                    <h3>beef</h3>
                </div>
            </div>

        
        </section>
    );
}

export default Categories;
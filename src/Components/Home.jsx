// import React, { useEffect, useState }from 'react';
// import { Link } from "react-router-dom"
// import Coming from "../picture/Coming_Soon/Coming_Soon.001.jpeg"
// import Adds from"../picture/adds/adds.002.jpeg"

// function Home(props) {
//     const [meals, SetMeals] = useState([])
//     const Url = `https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_themealdb_KEY}/randomselection.php`
//     useEffect (() => {
//         console.log(Url)
//         fetch (Url)
//         .then(res => {
//             if(res.ok){
//                 return res.json()
//             }
//         })
//         .then(json =>{
//             console.log(json)
//             SetMeals(json.meals)
//         })
//         .catch(err => console.log('oooo you did somthing wrong', err))
//     }, [] )
//     return (
//        <div className="bigContainer">
//         <div className="StaffFavorites">
//         <h2>Staff Favorites! </h2>
//         <div className='HomeContainer'>
//             {meals.map((meals) =>
//                 <Link to= {`/recipe/${meals.idMeal}`} key={meals.idMeal}>
//                     <div className="latestbox">
//                         <div >
//                             <img src={meals.strMealThumb} 
//                                 alt={meals.strMeal} 
//                                 className='latestimg'
//                                 />                                
//                         </div>
//                         <div className='latestname'>
//                             <h3>{meals.strMeal}</h3>                            
//                         </div>
//                     </div>
//                 </Link>   
//                 )}
//                 </div>
//             </div> 
//         <div className="Mid">       
//             <div className="News">
//                     <h2>Food News</h2>
//                     <img src={Coming} alt="Coming" className="Coming"/>

//             </div>
//             <div className="seaonal">
//                     <h2>Get your Baking Approns on!</h2>
//                     <img src={Coming} alt="Coming" className="Coming"/>
//             </div>
//         </div>
        
//         <div className="Adds">
//             <img src={Adds} alt="Adds" className="AddsImg" />
//             <h6>ADVERTISEMENT</h6>

//         </div>
            
//     </div>
//     );
// }
// export default Home;           
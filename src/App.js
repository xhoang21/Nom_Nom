import './App.css';
import React,{useState, useEffect} from 'react';
import { Route } from "react-router-dom";
import { Link } from 'react-router-dom';
// import Home from './Components/Home';
import Categories from './Components/Categories';
import CategoryDetail from './Components/CategoryDetail';
import Search from './Components/Search';
import Recipe from './Components/Recipe';
import Latest from './Components/Latest';
import Sumbitform from './Components/Sumbitform';
import Contact from './Components/Contact';
import logo from './picture/Nom-Nom-logo/default.png'
import Coming from "./picture/Coming_Soon/Coming_Soon.001.jpeg"
import Adds from"./picture/adds/adds.002.jpeg"

function App() {
  const [meals, SetMeals] = useState([])
  const Url = `https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_themealdb_KEY}/randomselection.php`
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
    <>
        <div className="coverlogo">
          <header className='header'>
           
            <img src={logo} alt="logo" className="logo"/>
            <div className="nav">
            <Link to="/">Home</Link>
            </div>
            <div className="nav">
            <Link to="/Latest">Newest Recipe</Link>
            </div>
            <div className="nav">
            <Link to="/Search">Search</Link>
            </div>
            <div className="nav">
            <Link to='/Categories'>Categories</Link>  
            </div>
            <div className="nav">
            <Link to='/SubmitRecipe'>Submit Recipe</Link>
            </div>
            <div className="nav">
            <Link to="/Contact">Contact Us</Link> 
            </div>         
            
          </header>      
        </div>
          <main className="main" >
                    <Route path="/" component={logo}/>
                    <Route path="/Latest" component={Latest} />
                    <Route path="/Search" component={Search}  />
                    <Route path="/Categories" component={Categories} />
                    <Route path="/CategoryDetail/:strCategory" component={CategoryDetail} />
                    <Route path="/recipe/:idMeal" component={Recipe} />
                    <Route path="/SubmitRecipe" component={Sumbitform} />
                    <Route path="/Contact" component={Contact}/>
          </main>
        <div className="bigContainer">
          <div className="StaffFavorites">
          <h2>Staff Favorites! </h2>
          <div className='HomeContainer'>
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
          <div className="Mid">       
              <div className="News">
                      <h2>Food News</h2>
                      <img src={Coming} alt="Coming" className="Coming"/>

              </div>
              <div className="seaonal">
                      <h2>Get your Baking Approns on!</h2>
                      <img src={Coming} alt="Coming" className="Coming"/>
              </div>
          </div>
          
          <div className="Adds">
              <img src={Adds} alt="Adds" className="AddsImg" />
              <h6>ADVERTISEMENT</h6>

        </div>
            
    </div>
    );

          <footer>
          <h6>&copy; 2021 by NomNom inc. All Rights Reserved.</h6>
          <img src={logo} alt="logo" className="footer"/>
          </footer>
    </>
  
  );
  
}

export default App;

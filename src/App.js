import './App.css';
import React,{useState, useEffect} from 'react';
import Nav from './Components/Nav'
import Categories from './Components/Categories';
import { Route } from "react-router-dom"
import Search from './Components/Search';
import './App.css'
import background from './picture/IMG_0040.JPG'
import CategoryDetail from './Components/CategoryDetail'
import Recipe from './Components/Recipe';




function App() {
  
  return ( 
    <>          
    <div className="Background" 
      style={{ backgroundImage:`url(${background})`,
                background:'cover' }}>
      <div className="Container">
        <header> 
          <h1>Nom Nom</h1>
        </header>       
        <div className="App-NavBar">
        <Nav />
        <Route path="/Seach" component={Search}  />
        
        </div>
        <Route path="/Categories" component={Categories} />
        <Route path="/CategoryDetail/:strCategory" component={CategoryDetail} />
        <Route path="/recipe/:idMeal" component={Recipe} />
        <main className="main">
          
        </main>
      </div>
      </div>  
    </>
  
  );
  
}

export default App;

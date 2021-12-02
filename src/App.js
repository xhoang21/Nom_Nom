import './App.css';
import React,{useState, useEffect} from 'react';
import { Route } from "react-router-dom";
import Categories from './Components/Categories';
import Nav from './Components/Nav';
import Search from './Components/Search';
import CategoryDetail from './Components/CategoryDetail';
import Recipe from './Components/Recipe';
import background from './picture/IMG_0040.JPG'
import headerpic from './picture/NomNom-logo/cover.png'



function App() {
  
  return ( 
    <>
      
        <div className="Container">
          <header className='header'> 
          </header>       
        </div>
          <main className="main" >
                    <div className="App-NavBar">
                    <Nav />        
                    </div>
                    <Route path="/Seach" component={Search}  />
                    <Route path="/Categories" component={Categories} />
                    <Route path="/CategoryDetail/:strCategory" component={CategoryDetail} />
                    <Route path="/recipe/:idMeal" component={Recipe} />
            
          </main>
          
    </>
  
  );
  
}

export default App;

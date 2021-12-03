import './App.css';
import React,{useState, useEffect} from 'react';
import { Route } from "react-router-dom";
import Categories from './Components/Categories';
import Search from './Components/Search';
import CategoryDetail from './Components/CategoryDetail';
import Recipe from './Components/Recipe';
import logo from './picture/Nom-Nom-logo/default.png'
import { Link } from 'react-router-dom';
import Latest from './Components/Latest';
import Sumbitform from './Components/Sumbitform';
import Contact from './Components/Contact';
import Home from './Components/Home';

function App() {
  
  return ( 
    <>
        <div className="coverlogo">
          <header className='header'>
            <img src={logo} alt="logo" className="logo"/>
            <div className="nav">
            <Link to="/Home">Home</Link>
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
                    <Route path="/Home" component={Home}/>
                    <Route path="/Latest" component={Latest} />
                    <Route path="/Search" component={Search}  />
                    <Route path="/Categories" component={Categories} />
                    <Route path="/CategoryDetail/:strCategory" component={CategoryDetail} />
                    <Route path="/recipe/:idMeal" component={Recipe} />
                    <Route path="/SubmitRecipe" component={Sumbitform} />
                    <Route path="/Contact" component={Contact}/>
          </main>
       
          <footer>
          <h6>&copy; 2021 by NomNom inc. All Rights Reserved.</h6>
          <img src={logo} alt="logo" className="footer"/>
          </footer>
    </>
  
  );
  
}

export default App;


import React, {useEffect, useState} from 'react';
import SearchForm from './SearchForm'
import SearchRecipe from './SearchRecipe'


function Search(props) {
    const [search, setSearch] = useState("")
    const [meals, setMeals] = useState([])
    const SearchOptions = {
    key: process.env.REACT_APP_themealdb_KEY,
    api:"https://www.themealdb.com/api/json/v2/",
    endpoint:'/search.php'
  };

  function getMeal(search) {
    const Url =`${SearchOptions.api}${SearchOptions.key}${SearchOptions.endpoint}?s=${search}`
    console.log(Url)
    fetch(Url)
    .then(res => res.json())
    .then (json => {
      console.log(json)
      setMeals(json.meals);
      setSearch("")
      console.log(json.meals)
    })
    .catch(err => console.log('dang it not again!', err))
  }
  function handleChange(ev) {
    setSearch(ev.target.value)
  }
  function handleSubmit(ev) {
    ev.preventDefault()
    getMeal(search)
  }  
    return (
        <div>
          <SearchForm 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            search={search}/>
          <SearchRecipe 
            meals={meals}/>            
        </div>
    );
}

export default Search;
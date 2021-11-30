
import React, {useEffect, useState} from 'react';
import SearchForm from './SearchForm'

function Search(props) {
    const [search, setSearch] = useState("")
    const SearchOptions = {
    key: process.env.REACT_APP_themealdb_KEY,
    api:"https://www.themealdb.com/api/json/v/",
    endpoint:'/search.php'
  };

  useEffect(() => {
    getRecipe();
  }, []);

  function getRecipe(search) {
    const Url =`${SearchOptions.api}${SearchOptions.key}${SearchOptions.endpoint}?s=${search}`
    fetch(Url)
    .then(res => res.json())
    .then (res => {
      getRecipe(res.data);
      setSearch('')
    })
    .catch(err => console.log('dang it not again!', err))
  }
  function handleChange(ev) {
    setSearch(ev.target.value)
  }
  function handleSubmit(ev) {
    ev.preventDefault()
    getRecipe(search)
  }  
    return (
        <div>
          <SearchForm 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            search={search}/>
            
        </div>
    );
}

export default Search;
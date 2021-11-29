
import React, {useEffect, useState} from 'react';

function Search(props) {
    const [search, setSearch] = useState("")
    const SearchOptions = {
    key: process.env.REACT_APP_themealdb_KEY,
    api:"www.themealdb.com/api/json/v1/",
    endpoint:'/search.php'
  }
  

    return (
        <div>
            
        </div>
    );
}

export default Search;
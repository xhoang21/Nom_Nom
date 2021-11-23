import './App.css';
import Nav from './Components/Nav'
import Categories from './Components/Categories';
import { Route } from "react-router-dom"
import Search from './Components/Search';

const SeachOptions = {
  key: process.env.REACT_APP_themealdb_KEY,
  limit:10,
  api:"www.themealdb.com/api/json/v1/",
  endpoint:'/search.php'

}


function App() {
  return (
  <>
    <div>
      <header> 
         <h1>Nom Nom</h1>
      </header> 
      <div className="App-NavBar">
      <Nav />
      </div>
      <main className="main">

      <Route path="/Seach" component={Search}  />
      <Route path="/Categories" component={Categories} />  
      </main>
    </div>

  </>  
  );
  
}

export default App;

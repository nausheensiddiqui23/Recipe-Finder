import { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import './App.css';
import chicken_curry from './assets/chicken_curry.jpg'

function App(){
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const dummyData = [
    {
    title: 'Chicken Curry',
    image: chicken_curry,
      calories: 350,
  },
  {
    title: 'Pasta',
    image: '',
    calories: 350,
  },
  ];

  const handleSearch = () => {
    setRecipes(dummyData);
  };


  return (
    <div className="app">
      <h1>Recipe Finder</h1>
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
     <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
     </div>
    </div>
  );

}


export default App;
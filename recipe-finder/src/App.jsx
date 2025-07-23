import { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import './App.css';

function App(){
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const dummyData = [
    {
    title: 'Chicken Curry',
     image: 'https://via.placeholder.com/150',
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
      <h1>Recipe Finderrr</h1>
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
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
      <h1>Recipe Finder</h1>
    </div>
  )

}


export default App;
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import './App.css';

function App(){
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const dummyData = [
    
  ]
}

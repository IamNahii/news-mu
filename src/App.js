import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import News from './components/News/News';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=93fa7e73598a47c3aec723ae4bb6aeea'
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
      <h1>Headlines: {articles.length}</h1>
      {
        articles.map(article => <News article = {article}></News>)
      }
      </header>
    </div>
  );
}

export default App;

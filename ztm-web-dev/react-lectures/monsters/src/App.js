import React, { useState, useEffect } from 'react';
// import {robots} from './robots';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import CardList from './components/CardList';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState(robots);

  const onSearch = (e) => {
    setFilteredRobots(robots.filter((robot) => {
      return robot.name.toLowerCase().includes(e.target.value) || robot.email.toLowerCase().includes(e.target.value);
    }))
  }

  useEffect(
    async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users',);
      const users = result.data;
      setRobots(users);
    }, 
  []);

  return(
    <div className='tc'>
      <h1>Robofriends</h1>
      <SearchBar handleSearch={onSearch} />
      <CardList robots={filteredRobots}/>
    </div>
  );
}

export default App;
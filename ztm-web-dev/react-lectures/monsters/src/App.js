import React, { useState } from 'react';
import {robots} from './robots';

import SearchBar from './components/SearchBar';
import CardList from './components/CardList';

const App = () => {
  const [filteredRobots, setFilteredRobots] = useState(robots);

  const onSearch = (e) => {
    setFilteredRobots(robots.filter((robot) => {
      return robot.name.toLowerCase().includes(e.target.value) || robot.email.toLowerCase().includes(e.target.value);
    }))
  }

  return(
    <>
      <SearchBar handleSearch={onSearch} />
      <CardList robots={filteredRobots}/>
    </>
  );
}

export default App;
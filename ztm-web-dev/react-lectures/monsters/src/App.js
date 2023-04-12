import React from 'react';
import {robots} from './robots';

import Card from './components/Card';

const App = () => {
  const renderedRobots = robots.map((robot) => {
    return (<Card 
              key={robot.id} 
              id={robot.id}
              name={robot.name} 
              email={robot.email} 
            />);
  });

  return(
    <>{renderedRobots}</>
  );
}

export default App;
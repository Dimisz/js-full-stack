import { useState } from 'react';

import './App.css';
import GoalList from './GoalList';
import NewGoal from './NewGoal';

const courseGoals = [
  {id: 'cg1', text: 'Finish the course'},
  {id: 'cg2', text: 'Understand the topics covered'},
  {id: 'cg3', text: 'Get a general idea about MERN'},
  {id: 'cg4', text: 'Transit to portfolio project'},
];

const App = () => {
  const [goals, setGoals] = useState(courseGoals);

  const addGoal = (goal) => {
    // console.log('addGoal from  App fired');

    setGoals((previousGoals) => {
      return [...previousGoals, goal];
    });
    // goals.map((g) => console.log(g));
  }

  return(
    <div className='course-goals'>
      <h1>Course Goals</h1>
      <GoalList goals={goals}/>
      <NewGoal addNewGoal={addGoal} />
    </div>
  );
}

export default App;
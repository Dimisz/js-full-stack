import { useState } from 'react';

const NewGoal = ({addNewGoal}) => {
  const [goal, setGoal] = useState({text: ''});

  const handleSubmit = (e) => {
    // console.log('handleSubmit from NewGoal fired');
    e.preventDefault();
    addNewGoal(goal);
    setGoal({text: ''});
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        placeholder='New Goal'
        value={goal.text}
        onChange={(e) => setGoal({
          id: Math.random().toString(), 
          text: e.target.value
        })}
      ></input>
      <button type='submit'>Add</button>
    </form>
  );
}

export default NewGoal;
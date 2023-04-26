import './GoalList.css';

const GoalList = ({goals}) => {
  const renderedGoals = goals.map((goal) => {
    return <li key={goal.id}>{goal.text}</li>;
  });

  return(
    <ul className='goal-list'>
      {renderedGoals}
    </ul>
  );
}

export default GoalList;
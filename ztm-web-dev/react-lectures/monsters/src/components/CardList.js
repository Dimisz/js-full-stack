import Card from "./Card";

const CardList = ({robots}) => {
  const renderedRobots = robots.map((robot) => {
    return (<Card 
              key={robot.id} 
              id={robot.id}
              name={robot.name} 
              email={robot.email} 
            />);
  });

  return(
    <div>
      {renderedRobots}
    </div>
  );
}

export default CardList;
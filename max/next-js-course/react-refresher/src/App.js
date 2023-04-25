import { useState } from 'react';

import Todo from "./components/Todo";

const myTodos = [
  {id: 1, text: 'Learn React'},
  {id: 2, text: 'Learn NextJS'},
  {id: 3, text: 'Brimg everything together in a Full-Stack App'}
];

const App = () => {
  const [todos, setTodos] = useState(myTodos);

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }

  const renderedTodos = todos.map((todo) => {
    return (
      <Todo 
        key={todo.id} 
        id={todo.id}
        text={todo.text} 
        deleteHandler={handleDelete}
      />
    );
  });

  return(
    <div>
      <h1>My Todos</h1>
      {renderedTodos}
    </div>
  );
}

export default App;

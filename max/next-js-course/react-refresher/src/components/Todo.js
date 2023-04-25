const Todo = ({id, text, deleteHandler}) => {
  return(
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button 
          className="btn"
          onClick={() => deleteHandler(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
const Modal = ({todoId, deleteHandler, modalHandler}) => {
  const deleteTodo = () => {
    deleteHandler(todoId);
    modalHandler();
  }

  return(
    <div className="modal">
      <p>Are you sure?</p>
      <button 
        className="btn btn--alt"
        onClick={modalHandler}
      >
        Cancel
      </button>
      <button 
        className="btn"
        onClick={deleteTodo}
      >
        Confirm
      </button>
    </div>
  );
}

export default Modal;
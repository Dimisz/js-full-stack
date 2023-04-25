import { useState } from 'react';

import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = ({id, text, handleDelete}) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((prev) => {
      return !prev;
    });
  }

  return(
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button 
          className="btn"
          onClick={handleModal}
        >
          Delete
        </button>
        {showModal &&
          <>
            <Modal 
              todoId={id} 
              deleteHandler={handleDelete} 
              modalHandler={handleModal}
            /> 
            <Backdrop />
          </>
        }
      </div>
    </div>
  );
}

export default Todo;
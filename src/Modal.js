import React, { useRef, useEffect } from "react";

const Modal = ({ onAdd }) => {
  const ref = useRef();

  useEffect(() => {}, []);

  return (
    <div className="modal">
      <div class="overlay" />
      <div className="modal-body">
        <textarea ref={ref} />
        <button onClick={() => onAdd(ref.current.value)}>Add Todo</button>
      </div>
    </div>
  );
};

export default Modal;

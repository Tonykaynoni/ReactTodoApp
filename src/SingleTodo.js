import React, { useEffect } from "react";
const SingleTodo = ({ myTodoItem }) => {
  useEffect(() => {}, []);
  return (
    <div className="singleTodoList">
      <input type="checkbox" /> <p> {myTodoItem}</p>
    </div>
  );
};

export default SingleTodo;

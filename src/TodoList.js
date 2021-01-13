import React, { useEffect } from "react";
import SingleTodo from "./SingleTodo";
const TodoList = ({ list }) => {
  // useEffect(() => {

  // }, []);
  return (
    <div>
      {list.map((todoItem) => (
        <SingleTodo myTodoItem={todoItem} key={list.indexOf(todoItem)}/>
      ))} 
    </div>
  );
};

export default TodoList;

import logo from "./logo.svg";
import "./App.css";
import Todo from "./TodoList";
import SearchTodo from "./SearchTodo";
import AddTodo from "./AddTodo";
import { useState } from "react";
import Modal from "./Modal";

function App() {
  let [list, updateList] = useState([]);
  let [isModal, updateModal] = useState(false);

  return (
    <div>
      <SearchTodo />
      <div className="app">
        <Todo list={list}/>
        <div className="addTodo">
          <button onClick={() => updateModal(!isModal)}>+</button>
        </div>
        {isModal && (
          <Modal
            
            onAdd={(updatedItem) => {
              updateList(list => [...list, updatedItem]
                ); //To be sure the value of the list is the current one.
                updateModal(!isModal)
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;

import Header from "./Components/Header";
import { useState } from "react";
import ToDoList from "./Components/ToDoList";

const App = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  function addTodoItem() {
    if (input.trim() === "") return;
    const item = {
      id: todo.length + 1,
      text: input,
      completed: false,
    };

    setTodo((prev) => [...prev, item]);
    setInput("");
  }

  function toggleCompleted(id) {
    setTodo(
      todo.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      })
    );
  }

  function deleteItem(id) {
    setTodo(todo.filter((t) => t.id !== id));
  }

  function editItem(id) {
    const editTodo = todo.find((t) => t.id === id);
    setInput(editTodo.text);
    // setEditId(id);
    setTodo((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="bg-gray-200 h-screen">
      <Header/>
    <ToDoList
      input={input}
      setInput={setInput}
      todos={todo}
      addTodoItem={addTodoItem}
      toggleCompleted={toggleCompleted}
      deleteItem={deleteItem}
      editItem={editItem}
    />
    </div>
  );
};

export default App;

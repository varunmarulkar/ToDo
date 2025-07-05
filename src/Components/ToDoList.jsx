
import ToDoItem from "./ToDoItem";

const ToDoList = ({
  input,
  setInput,
  todos,
  addTodoItem,
  toggleCompleted,
  deleteItem,
  editItem,
}) => {
  return (
    <div className="text-center m-10 shadow-lg bg-gray-100 p-10">
      <input
        className=" border-2 w-[300px] rounded-sm p-2"
        type="text"
        placeholder="Enter ToDo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-gray-100 border-2 p-2 rounded-sm" onClick={addTodoItem}>
        Add
      </button>

      <ul>
        {todos.map((to) => (
          <ToDoItem
            key={to.id}
            to={to}
            toggleCompleted={toggleCompleted}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;


const ToDoItem = ({ to, toggleCompleted, deleteItem, editItem }) => {
    return (
      <li key={to.id} className="m-2 p-2 shadow-sm">
        <input
          type="checkbox"
          checked={to.completed}
          onChange={() => toggleCompleted(to.id)}
        />
        <span className={to.completed ? "line-through text-2xl font-serif" : "text-2xl font-serif"}>
          {to.text}
        </span>
        <button
          className="border-2 m-1 bg-red-500 cursor-pointer p-1 "
          onClick={() => deleteItem(to.id)}
        >
          Delete
        </button>
        <button
          className="border-2 m-1 bg-red-500 cursor-pointer p-1"
          onClick={() => editItem(to.id)}
        >
          Edit
        </button>
      </li>
    );
  };
  
  export default ToDoItem;
  
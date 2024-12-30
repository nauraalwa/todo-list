export function TodoItem({completed, id, title, toggleToDo, deleteTodo}) {
    return (
        <li> {/* react needs to add key if looping through an array so react knows which element to change */}
            <label>
                <input 
                    type="checkbox" 
                    checked={completed}
                    onChange={(e) => toggleToDo(id, e.target.checked)}
                />
                {title}
            </label>
            <button 
            onClick={() => deleteTodo(id)} 
            className="btn btn-danger">
            Delete
            </button>
        </li>
    )
}
import { TodoItem } from "./TodoItem";

export function TodoList ({todos, toggleToDo, deleteTodo}) {
    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map((todo) => {
                return (
                    <TodoItem 
                        {...todo}
                        // id={todo.id}
                        // completed={todo.completed}
                        // title={todo.title}
                        key={todo.id}
                        toggleToDo={toggleToDo}
                        deleteTodo={deleteTodo}
                    />
                );
            })}
        </ul>
    )
}
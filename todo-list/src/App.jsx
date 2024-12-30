import { NewToDoForm } from './NewToDoForm';
import './styles.css'
import { useState, useEffect } from 'react'
import { TodoList } from './TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  }); {/* default state is an empty array*/}

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo (title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleToDo(id, completed) { {/* accepts id and completed as arguments */}
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) { {/* loop through the currentTodos array and see which one matches with the one that we checked */}
          return { ...todo, completed }; {/* overwrite the completed:false into true */}
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) { {/* accepts id as an argument */}
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id); {/* only keeping the ones we're not deleting */}
    });
  }

  return (
    <> {/* in react u can only return 1 element (cant form and h1), so everything must be wrapped in a div represented by <>. cuz react changes only per element not per page*/}
      <NewToDoForm onSubmit={addTodo}/>
      <h1 className="header">To Do List</h1>
      <TodoList todos={todos} toggleToDo={toggleToDo} deleteTodo={deleteTodo}/>
    </>
  );
}

export default App;

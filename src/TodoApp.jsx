import { useState } from "react"
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todosApi"

export const TodoApp = () => {
  
    const [todoId, setTodoId] = useState(1)
    // const { data: todos = [], isLoading } = useGetTodosQuery()
    const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

    const prevTodo = () => {
        if(todoId === 1) return;
        setTodoId( todoId - 1)
    }

    return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>Loading: { isLoading ? 'True': 'False'}</h4>

        <pre>{ JSON.stringify( todo )}</pre>

        <button onClick={ prevTodo }>
            Prev todo
        </button>
        <button onClick={ () => setTodoId( todoId + 1)}>
            Next todo
        </button>
        {/* <ul>
            { 
                todos.map( todo => (
                    <li key={ todo.id }>
                        <strong>{ todo.completed ? 'DONE' : 'Pending'} </strong>
                        { todo.title }
                    </li>
                ))
            }
        </ul> */}

    </>
  )
}

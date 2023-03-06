import React, { memo, useMemo } from 'react'

function TodosList(props) {
  console.log('TodosList')
  const filteredTodos = useMemo(() => {
    return props.todos
      .filter(todo => todo.userId === props.userId)
      .map(todo => {
        console.log('MAP')
        return <li
          onClick={e => toggleTodo(todo)}
          key={todo.id} style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}>
          {todo.id}:
          {' ' + todo.title}
          <button onClick={e => deleteTodo(todo)}>Delete</button>
        </li>
      })
  }, [props.userId, props.todos])

  return (
    <>
      {/* {props.children} */}
      <ul>{filteredTodos}</ul>
    </>
  )

  function toggleTodo(todo) {
    props.setTodos(prevTodos => {
      // Immutable logic
      return prevTodos.map(prevTodo => prevTodo.id === todo.id
        ? { ...prevTodo, completed: !prevTodo.completed }
        : prevTodo)
    })
  }

  function deleteTodo(todo) {
    props.setTodos(prevTodos => {
      return prevTodos.filter(prevTodo => prevTodo.id !== todo.id)
    })
  }
}

const memoTodosList = memo(TodosList)

export default memoTodosList

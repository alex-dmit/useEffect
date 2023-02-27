import React from 'react'

function TodosList(props) {
  return (
    <>
      {props.children}
      <ul>
        {
          props.todos.map(todo => (
            <li key={todo.id}>
              {props.users.find(user => user.id === todo.userId)?.name}::
              {todo.id}::
              {todo.title}::
              {String(todo.completed)}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default TodosList

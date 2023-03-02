import React, { memo, useMemo } from 'react'

function TodosList(props) {
  console.log('TodosList')
  const filteredTodos = useMemo(() => {
    return props.todos
      .filter(todo => todo.userId === props.userId)
      .map(todo => {
        console.log('MAP')
        return <li key={todo.id}>
          {props.users.find(user => user.id === todo.userId)?.name}::
          {todo.id}::
          {todo.title}::
          {String(todo.completed)}
        </li>
      })
  }, [props.userId])

  return (
    <>
      {/* {props.children} */}
      <ul>{filteredTodos}</ul>
    </>
  )
}

const memoTodosList = memo(TodosList)

export default memoTodosList

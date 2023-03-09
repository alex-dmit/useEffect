// @ts-check
import React, { useCallback, useState } from 'react'
import Form from './Form';

export default function NewTask(props) {
  console.log('NewTask');
  const [taskTitle, setTaskTitle] = useState('')
  const [userId, setUserId] = useState(1)
  const id = (props.todos.length) 
    ? props.todos.slice(-1).pop().id + 1
    : 0
  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    console.log(id);
    console.log('Submit');
    props.setTodos(prevTodos => {
      return [...prevTodos, {
        id,
        title: taskTitle,
        completed: false,
        userId
      }]
    })
    setTaskTitle('')
  }, [taskTitle, userId])
  return (
    <Form
      taskTitle={taskTitle}
      setTaskTitle={setTaskTitle}
      handleSubmit={handleSubmit}
      userId={userId}
      setUserId={setUserId}
    />
  )
}

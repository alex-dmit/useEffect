import React, { memo, useContext } from 'react'
import { DataContext } from '../DataContext';
import UserSelector from './UserSelector';

// props
function Form({
  taskTitle,
  setTaskTitle,
  handleSubmit,
  userId,
  setUserId
}) {
  console.log('Form');
  const { users } = useContext(DataContext)
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo-title">New title:</label>
      <input
        id='todo-title'
        type={'text'}
        value={taskTitle}
        onChange={e => setTaskTitle(e.target.value)}
      />
      <UserSelector
        users={users}
        userId={userId}
        setUserId={setUserId}
      />
      <button type='submit'>Add todo</button>
    </form>
  )
}

const memoForm = memo(Form)
export default memoForm
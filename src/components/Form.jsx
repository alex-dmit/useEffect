import React, { memo } from 'react'
import UserSelector from './UserSelector';

function Form({
  taskTitle,
  setTaskTitle,
  handleSubmit,
  users,
  userId,
  setUserId
}) {
  console.log('Form');
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
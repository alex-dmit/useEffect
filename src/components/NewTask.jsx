import React, { useState } from 'react'

export default function NewTask() {
  console.log('NewTask');
  const [taskName, setTaskName] = useState('')
  return (
    <>
      <input
        type={'text'}
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
      />
    </>
  )
}

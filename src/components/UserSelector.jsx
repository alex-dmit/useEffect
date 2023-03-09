import React, { useContext } from 'react'
import { DataContext } from '../DataContext';

export default function UserSelector(props) {
  // console.log(props.users);
  const { users } = useContext(DataContext)
  console.log('UserSelector')
  return (
    <select
      value={props.userId}
      onChange={e => props.setUserId(+e.target.value)} 
    >
      {
        users.map(user => {
          return <option value={user.id} key={user.id}>
            {user.name}
          </option>
        })
      }
    </select>
  )
}

// const memoUserSelector = memo(UserSelector)

// export default memoUserSelector
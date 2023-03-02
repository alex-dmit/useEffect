import React, { memo } from 'react'

export default function UserSelector(props) {
  // console.log(props.users);
  console.log('UserSelector')
  return (
    <select
      value={props.userId}
      onChange={e => props.setUserId(+e.target.value)} 
    >
      {
        props.users.map(user => {
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
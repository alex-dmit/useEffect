import { useState, useEffect } from 'react'
import './App.css'
import NewTask from './components/NewTask'
import TodosList from './components/TodosList'
import UserSelector from './components/UserSelector'
import { DataContext } from './DataContext'

function App() {
  console.log('render App')
  const [loading, setLoading] = useState(false)
  const [todos, setTodos] = useState([])
  const [users, setUsers] = useState([])
  const [userId, setUserId] = useState(5)

  useEffect(() => {
    let start = true
    // const controller = new AbortController();
    async function getData() {
      try {
        setLoading(true)
        const resTodos = await fetch('https://jsonplaceholder.typicode.com/todos', {
          // signal: controller.signal
        })
        const todos = await resTodos.json()
        if (start) {
          const resUsers = await fetch('https://jsonplaceholder.typicode.com/users', {
            // signal: controller.signal
          })
          const users = await resUsers.json()
          setTodos(todos)
          /**
           * {
           *    'user1id': {
           *        'task1id': {...},
           *        'task2id': {...},
           *        'task3id': {...},
           *    }
           * }
           */
          setUsers(users)
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getData()
    return () => {
      start = false
      // controller.abort()
    }
  }, [])

  return (
    <DataContext.Provider value={{users}}>
      <NewTask
        todos={todos}
        setTodos={setTodos}
      />

      <UserSelector
        userId={userId}
        setUserId={setUserId}
      />

      {
        !loading
          ? <TodosList
            userId={userId}
            todos={todos}
            setTodos={setTodos}
          />
          : 'Loading...'
      }
    </DataContext.Provider>
  )
}

export default App

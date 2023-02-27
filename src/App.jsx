import { useState, useEffect } from 'react'
import './App.css'
import TodosList from './components/TodosList'

function App() {
  console.log('render')
  const [loading, setLoading] = useState(false)
  const [todos, setTodos] = useState([])
  const [users, setUsers] = useState([])
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
    <div>
      {
        !loading ? <TodosList todos={todos} users={users}>
          <h1>Todos</h1>
        </TodosList> : 'Loading...'
      }
    </div>
  )
}

export default App

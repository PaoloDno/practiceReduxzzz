import AddTodo from './features/todos/addTodo'
import TodoList from './features/todos/todoList'


function App() {

  return (
    <>
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
    </>
  )
}

export default App

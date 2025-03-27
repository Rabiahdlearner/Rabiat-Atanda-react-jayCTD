import './vite.config.js'
import './App.css'
import './TodoList.jsx'
import './TodoForm.jsx'

function App() {
  const todos = [
    {id: 1, title: "review resources"},
    {id: 2, title: "take notes"},
    {id: 3, title: "code out app"}
  ]
  

  return (
    <>
    <div>
      <h1>My <todos></todos></h1>
      
      {/* Adding an instance of todolist and todoform here */}
      <TodoForm/>
      <TodoList/> 
      
    </div>
  </>);
}

export default App

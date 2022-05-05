import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import { TodoProvider } from "./Contexts/TodoContext";

function App() {
  return <div className="container">
    <h1>Todo React App</h1>
    <TodoProvider>
      <Form />
      <List />
    </TodoProvider>
  </div>
}

export default App

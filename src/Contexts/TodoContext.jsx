import { createContext, useReducer } from "react";
import { useEffect } from "react/cjs/react.development";
import useLocalStorage from "../Hooks/useLocalStorage";
import todoReducer from "../Reducers/todo.reducer";

const TodoContext = createContext();
const initialState = [{
  title: "run",
  description: "in the park at 6pm",
  id: 1,
  status: false
}];

function TodoProvider({ children }) {
  let [storedValue, setValue] = useLocalStorage("todo", initialState);
  const [state, dispatch] = useReducer(todoReducer, storedValue);

  useEffect(() => {
    setValue(state);
  }, [state]);


  return <TodoContext.Provider value={{ state, dispatch }}>
    {children}
  </TodoContext.Provider>
}

export { TodoContext, TodoProvider };
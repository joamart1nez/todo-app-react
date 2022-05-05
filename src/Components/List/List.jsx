import { useState } from "react";
import { useContext } from "react/cjs/react.development"
import { TodoContext } from "../../Contexts/TodoContext"
import Filter from "./Filter";
import Item from "./Item"
import './List.css'

export default function List() {
  const { state, dispatch } = useContext(TodoContext);
  const [labelSelected, setLabelSelected] = useState(0);

  const labels = ["all", "active", "completed"];

  function handleFilter(index) {
    setLabelSelected(index);
  }

  function filterList(item){
    if(labelSelected === 0) return true;
    if(labelSelected === 1) return !item.status;
    if(labelSelected === 2) return item.status;
  }


  function deleteTodo(id) {
    dispatch({ type: "DELETE_TODO", payload: { id } });
  }
  function toggleTodo(id) {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  }

  return <div className="list-container">
    {state.filter((item) => filterList(item)).map((item) => {
      return <Item key={item.id} {...item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    })}
    <Filter labels={labels} handleFilter={handleFilter} labelSelected={labelSelected}/>
  </div>
}
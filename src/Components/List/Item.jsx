import { useState } from "react"

export default function Item({ title, description, status, id, toggleTodo, deleteTodo }) {
  let [mouseOver, setMouseOver] = useState(false);


  return (
    <div className="item-list" style={{borderColor: status ? "#1E6FC5" : "black"}}>
      <div className="item-container">
        <div className="title-container">
          <input type="checkbox" checked={status} onChange={() => toggleTodo(id)} />
          <h3 className={status ? "checked" : ' '}>{title}</h3>
        </div>
        <button className="delete-todo" onClick={() => deleteTodo(id)}>x</button>
      </div>
      <p className="description">Description: {description}</p>
    </div >
  )
}
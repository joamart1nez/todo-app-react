import { useState, useContext } from "react"
import { TodoContext } from "../../Contexts/TodoContext";
import Input from "./Input";
import './Form.css'

export default function Form() {
  const [content, setContent] = useState({ title: "", description: "" });
  const { dispatch } = useContext(TodoContext);

  function handleInput(e) {
    setContent({
      ...content,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: { task: { ...content } } });
    setContent({ title: "", description: "" })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input name="title" handler={handleInput} value={content.title} />
      <Input name="description" handler={handleInput} value={content.description} />
      <button type="submit">Add</button>
    </form>
  )
}
import './Input.css';

export default function Input({ name, handler, value }) {
  return <input type="text" autoComplete="off" onChange={handler} value={value} name={name} placeholder={name} />
}
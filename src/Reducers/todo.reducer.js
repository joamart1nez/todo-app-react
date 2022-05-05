export default function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { ...action.payload.task, id: new Date().valueOf() }]
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    case 'TOGGLE_TODO':
      return state.map(todo => todo.id === action.payload.id ? { ...todo, status: !todo.status } : todo);
    default:
      throw new Error();
  }
}
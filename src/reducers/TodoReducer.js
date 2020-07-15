export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { title: action.todo.title, desc: action.todo.desc, id: Math.random() },
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

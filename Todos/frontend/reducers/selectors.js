

const allTodos = ({todos}) => {
  return Object.keys(todos).map( id => {
    return todos[id];
  });
};


export default allTodos;
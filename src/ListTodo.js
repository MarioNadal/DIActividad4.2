const ListTodo = ({Todos, setTodos}) => {
  return (
        <div>
          <ul>
            {Todos.map(todo =>
              <li key={todo.id} className={todo.nombre}>
              {todo.nombre}
              <button onClick={() => {
                let index = Todos.indexOf(todo)
                Todos.splice(index, 1) //At position index, remove n=1 items
                setTodos([...Todos])
              }}>
              Eliminar</button>
              <button onClick={() => {
                let id = Todos.indexOf(todo)
                const updateTodos = Todos.map((todo)=>{
                  if(todo.id === id+1){
                    return{...todo, isComplete:true};
                  }
                  return todo;
                })
                setTodos(updateTodos)
                console.log(todo.isComplete)
              }}>
              Actualizar</button>
              
              {todo.isComplete ? <span style={{backgroundColor: 'green'}}>Hecho</span> : <span style={{backgroundColor: 'red'}}>Pendiente</span> }
          </li>
      )}
        </ul>
       </div>
    )
}

export default ListTodo;
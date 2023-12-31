import { useState } from 'react';
import InputTodo from './InputTodo';
import ListTodo from './ListTodo';

const Todo = () => {
    const [todos, addTodos] = useState([
        {id:1,nombre:"Todo1",isComplete:false},
        {id:2,nombre:"Todo2",isComplete:false},
        {id:3,nombre:"Todo3",isComplete:false}
    ]);

    const [value, setValue] = useState("");

    function saveValue(event) {
        setValue(event.target.value)
    }

    function addList(){
        addTodos([...todos, {id:todos.length+1,nombre:value,isComplete:false}])
    }

    return (
        <div>
            <InputTodo ChangeInput={saveValue} Value={value} ClickButton={addList}/>
            <ListTodo Todos={todos} setTodos={addTodos}/>
        </div>
    )
}


export default Todo;
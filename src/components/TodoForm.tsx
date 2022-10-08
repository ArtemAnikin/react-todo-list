import { useState } from "react";

import "./TodoForm.scss"

const TodoForm:React.FC = () => {
    const [value,setValue] = useState('');

const addTodo:React.MouseEventHandler<HTMLButtonElement> = (el) => {
    el.preventDefault();
    if(value.trim().length>0){
        console.log("value =", value);
        setValue("");
    }
}

    return <form className="todo-form">
        <div className="form-input">
            <input 
            type="text"
            value={value}
            onChange={el => setValue(el.target.value)}
            />
        </div>
        <div className="form-btns">
            <button onClick={addTodo}>add ToDo</button>
        </div>
    </form>
}

export {TodoForm}
import { ITodoData } from "../types/dataItem"
import { TodoItem } from "./TodoItem";

import "./TodoList.scss"

interface ITodoListProps {
    items: ITodoData[]
}

const TodoList:React.FC<ITodoListProps> = ({items}) => {
    
    return <div className="todo-list">
        {
            items.map((todo, index) => 
            <TodoItem 
            key={index}
            {...todo}
            />)
        }
    </div>
}
export {TodoList}
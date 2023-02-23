import React from "react";
import '../TodoList/TodoList.css';

// ******************** Урок 1**************************************************
// const TodoList = ({ todos, onDeleteTodo }) => {
//     return (<ul className="TodoList">
//         {todos.map(({id, text }) => {
//             return <li className="TodoList__item" key={id} >
//                 <p className="TodoList__text">{text}</p>
//                 <button  onClick={() => onDeleteTodo(id)}>Видалити</button>
//             </li>
//        })}
//     </ul>)
// }

// export default TodoList;

// ************************************  УРОК 2  *************************

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
    return (
    <ul className="TodoList">
        {todos.map(({id, text, completed }) => {
            return <li className="TodoList__item"
                key={id} >
                
                <input type='checkbox'
                    className="TodoList__checkbox"
                    checked={completed}
                    onChange={() => onToggleCompleted(id)}
                />
                <p className="TodoList__text">{text}</p>
                <button  onClick={() => onDeleteTodo(id)}>Видалити</button>
            </li>
       })}
    </ul>)
}

export default TodoList;

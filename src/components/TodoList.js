import React from 'react'

import Todo from './todo'


function TodoList(props){
    
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {props.todos.map(todo =>(
                    <Todo text={todo.text}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
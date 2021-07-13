import React from 'react'

function Todo(props){
    
    const deleteTodo = () =>{
        props.setTodos(props.todos.filter((el) =>{
            return el.id !== props.todo.id
        }
        ));
    }

    const completeTodo = () =>{
        props.setTodos(props.todos.map((item) =>{
            if(item.id === props.todo.id){
                return{
                    ...item,completed: !item.completed,
                };
            }
            return item;
        }))
    }

    return(
        <div className="todo">
            <li className="todo-item">{props.text}</li>
            <button className="complete-btn" onClick={completeTodo}><i className="fas fa-check"></i></button>
            <button className="trash-btn"    onClick={deleteTodo}><i className="fas fa-trash"></i></button>
        </div>
    )
}


export default Todo
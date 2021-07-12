import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
// components
import Form from './components/Form';
import TodoList from './components/TodoList';

function Main(props){
    return(
        <div className="App">
            <header>
                <h1>React Todo List</h1>
            </header>
            <Form />
            <TodoList />
        </div>
    )
}

ReactDOM.render(
    <Main />,
  document.getElementById('root')
);

import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
// components
import Form from './components/Form';
import TodoList from './components/TodoList';

function Main(props){
    const [inputText,setInputText] = useState("");
    const [todos,setTodos] = useState([])

    return(
        <div className="App">
            <header>
                <h1>React Todo List </h1>
            </header>
            <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
            <TodoList todos={todos}/>
        </div>
    )
}

ReactDOM.render(
    <Main />,
  document.getElementById('root')
);

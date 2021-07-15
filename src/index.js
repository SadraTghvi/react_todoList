import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
// components
import Form from './components/Form';
import TodoList from './components/TodoList';

function Main(props){
    const [inputText,setInputText] = useState("");
    const [todos,setTodos] = useState([])
    const [status,setStatus] = useState("all")
    const [filteredTodos, setFilteredTodos] = useState([])

    const filterHandler = () =>{
        switch(status){
            case "completed":
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter(todo => todo.uncompleted === true));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }

    return(
        <div className="App">
            <header>
                <h1>React Todo List </h1>
            </header>
            <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
            <TodoList setTodos={setTodos} todos={todos}/>
        </div>
    )
}

ReactDOM.render(
    <Main />,
  document.getElementById('root')
);

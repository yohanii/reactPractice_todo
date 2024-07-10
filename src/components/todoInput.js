import {useReducer, useState} from "react";
import todoAction from "../actions/todoAction"
import {todoReducer} from "../reducers/todoReducer";
import TodoList from "./todoList";


const initialState = {
    todos: [],
    checked: [],
};

const TodoInput = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [input, setInput] = useState("");

    const add = () => {
        dispatch({type: todoAction.ADD_TODO, payload: {input: input}});
    }

    const check = (index) => {
        dispatch({type: todoAction.CHECK, payload: {index: index}});
    }

    return (
        <div>
            <article>
                <p>todos: {state.todos}</p>
                <input id="todo-input" type="text" placeholder="추가할 할 일을 입력하세요!"
                       onChange={(e) => setInput(e.target.value)}/>
                <button id="addBtn" onClick={ add }>추가</button>
            </article>
            <TodoList state={state} />
        </div>
    );
};

export default TodoInput;
import {useState} from "react";

const TodoList = (props) => {

    const initialState = [];
    for (let i = 0; i < props.state.todos.length; i++) {
        initialState.push(false);
    }

    const [checked, setChecked] = useState(initialState);

    const click = (e) => {
        const index = e.target.id;

        let newChecked = [...checked];
        newChecked[index] = !newChecked[index];

        setChecked(newChecked);
    }

    const showTodos = (state) => {

        const todos = state.todos;
        const result = [];

        for (let i = 0; i < todos.length; i++) {
            result.push(
                <div className="todo-item">
                    <input id={i} type="checkbox" checked={ checked[i] } onClick={(e) => click(e) }></input>
                    <p>{ todos[i] }</p>
                </div>
            );
        }

        return result;
    };

    return (
        <section id="todo-list">{showTodos(props.state)}</section>
    );
};

export default TodoList;
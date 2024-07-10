import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

const Main = () => {
    return (
        <main>
            <header>
                <h1>SimpleTodo</h1>
            </header>
            <TodoInput />
            <TodoList />
        </main>
    );
};

export default Main;
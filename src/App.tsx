import React, { useState } from "react";

import InputField from "./components/InputField";
import "./App.css";
import { data } from "./components/data/Data";
import TodoList from "./components/ToDolist/TodoList";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<data[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
            setTodo("");
        }
    };
    console.log(todos);

    return (
        <div className="App">
            <span className="heading"> TASKIFY </span>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;

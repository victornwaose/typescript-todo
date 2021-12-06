import React from "react";

import { data } from "../data/Data";
import SingleTodo from "../singleTodo/SingleTodo";
import "./TodoList.css";

interface Props {
    todos: any;
    setTodos: React.Dispatch<React.SetStateAction<data[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    console.log(todos);
    return (
        <div className="todos">
            {todos?.map((todo: any) => (
                <SingleTodo
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
        </div>
    );
};

export default TodoList;

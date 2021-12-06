import React, { useState } from "react";

import { data } from "../data/Data";
import "./SingleTodo.css";

interface Props {
    todo: data;
    setTodos: React.Dispatch<React.SetStateAction<data[]>>;
    todos: data[];
}

const SingleTodo: React.FC<Props> = ({ todo, setTodos, todos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editData, setEditData] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(
            todos?.map((todo: any) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setTodos(todos?.filter((todo: any) => todo.id !== id));
    };

    return (
        <form className="todos_single">
            {edit ? (
                <input
                    value={editData}
                    onChange={(e) => setEditData(e.target.value)}
                    className="todos_single_input"
                />
            ) : todo.isDone ? (
                <s className="todos_single-text">{todo?.todo}</s>
            ) : (
                <span className="todos_single-text">{todo?.todo}</span>
            )}

            <div className="todos_single-button">
                <button
                    onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit);
                        }
                    }}
                >
                    Edit
                </button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                <button onClick={() => handleDone(todo.id)}>Done</button>
            </div>
        </form>
    );
};

export default SingleTodo;

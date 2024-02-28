"use client";
import React, { useState } from "react";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputText, setInputText] = useState<string>('');

    const addTodo = () => {
        if (inputText.trim() !== '') {
            const newTodo: Todo = {
                id: todos.length + 1,
                text: inputText,
                completed: false,
            };
            setTodos([...todos, newTodo]);
            setInputText('');
        }
    };

    const toggleTodo = (id: number) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const deleteTodo = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    return (
        <div>
            <h1>To-Do List</h1>

            <p> <input className="text-black"
                type="text"
                value={inputText}
                onChange={handleInputChange}
            /> <button onClick={addTodo}>Add Todo</button> </p>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>

                        <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" onClick={() => deleteTodo(todo.id)}>Delete</button>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

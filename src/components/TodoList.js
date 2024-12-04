// src/components/TodoList.js
import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
        setInputValue('');
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Todoリスト</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="新しいタスクを入力..."
                    className="w-full p-2 border rounded"
                />
                <button
                    type="submit"
                    className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    追加
                </button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between p-2 border-b"
                    >
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                                className="mr-2"
                            />
                            <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                                {todo.text}
                            </span>
                        </div>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            削除
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
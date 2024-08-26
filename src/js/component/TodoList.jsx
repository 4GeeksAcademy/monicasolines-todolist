import React, { useState } from "react";

export const TodoList = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([])


    const addTodo = () => {
        setTodos([...todos, todo]);
        setTodo('')
    }

    const addX = () => {

    }

    return (
        <div className="container">
            <h1> Todo List</h1>
            <div className="todo-list">
                <ul className="list-group" style={{ listStyleType: 'none' }}>
                    <li className="list-group-item">
                        <input
                            type="text"
                            className="form-control"
                            id="inputTodo"
                            placeholder="Escribe para agregar a tu lista"
                            value={todo}
                            onChange={event => setTodo(event.target.value)}
                            onKeyDown={event => { if (event.key === 'Enter') { addTodo(); } }} />
                    </li>
                    {todos.map((element) => (
                        <li className="list-group-item" onMouseOver={<i class="fa-regular fa-trash-can"></i>}> ${element} </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


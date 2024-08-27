import React, { useState } from "react";

export const TodoList = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([])
    const [hovered, setHovered] = useState(null);

    const addTodo = () => {
        setTodos([...todos, todo]);
        setTodo('')
    }

    const eliminarLi = (index) => {
        setTodos(todos.filter((element, i) => i !== index));
    }

    return (
        <div className="container">
            <h1 className="text-light m-3" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 100 }}> Todo List</h1>
            <div className="todo-list">
                <ul className="list-group" id="ul" style={{ listStyleType: 'none' }}>
                    <li className="list-group-item">
                        <input
                            type="text"
                            className="form-control"
                            id="inputTodo"
                            placeholder={todos.length !== 0 ? "Write to add another one" : "No tasks, add a task!"}
                            value={todo}
                            onChange={event => setTodo(event.target.value)}
                            onKeyDown={event => { if (event.key === 'Enter') { addTodo(); } }}
                            style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 100 }}
                        />
                    </li>
                    {todos.map((element, index) => (
                        <li
                            className="list-group-item"
                            key={index}
                            onMouseOver={() => setHovered(index)}
                            onMouseOut={() => setHovered(null)}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Raleway, sans-serif', fontWeight: 100 }}
                        >
                            <span> {element} </span>
                            {hovered === index && (
                                <i
                                    className="far fa-trash-alt d-flex justify-content-end text-end align-content-end"
                                    style={{ marginLeft: '10px', cursor: 'pointer' }}
                                    onClick={() => eliminarLi(index)}
                                ></i>
                            )}
                        </li>
                    ))}
                    <li
                        className="list-group-item"
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Raleway, sans-serif', fontWeight: 100 }}
                    >
                        {todos.length} items left
                    </li>
                </ul>
            </div>
        </div>
    )
}


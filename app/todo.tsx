'use client'
import React, { useState } from 'react'

export default function Todo() {


    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([
        { todoText: 'todo 1', completed: false },
        { todoText: 'todo 2', completed: true },
        { todoText: 'todo 3', completed: true },
        { todoText: 'todo 4', completed: false },

    ]);

    const deleteTodo = (meraTodo: any) => {
        const newTodos = todos.filter(todo => {
            if (todo.todoText == meraTodo.todoText)
                return false
            return true
        })
        console.log("old todos: ", todos, 'New Todos: ', newTodos)
        setTodos(newTodos);
    }

    const onClickHandler = (meraElm: any) => {
        console.log('meraElm', meraElm);

        // map run on array, ane return an arr
        const newTodos = todos.map(todo => {
            console.log("todo :", todo)
            if (todo.todoText == meraElm.todoText) {
                todo.completed = !todo.completed // false hai to true and true hai to false
            }
            return todo;

        })
        console.log(newTodos)

        setTodos(newTodos);
    }
    const addTodo = () => {
        const newTodo = { todoText: todo, completed: false }
        const newTodos = [...todos, newTodo]
        setTodos(newTodos);
        setTodo('');
    }

    return (
        <>
            <div>
                Todo
            </div>
            <input type={'text'} placeholder='type here todos' value={todo}
                onChange={(e) => { setTodo(e.target.value) }}>
            </input>
            <button onClick={addTodo}>Add</button>
            <ul>{todos.map((elm) => {
                return <li style={{ color: elm.completed ? 'green' : 'orange', listStyle: "none" }} key={elm.todoText}>
                    <input type={'checkbox'} checked={elm.completed}
                        onChange={() => { onClickHandler(elm) }}
                    ></input>
                    {elm.todoText}==
                    <button onClick={() => { deleteTodo(elm) }}>Delete</button>
                </li>
            })}
            </ul>
        </>
    )
}

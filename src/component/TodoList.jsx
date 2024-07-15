import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onToggleComplete }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    onDelete={()=>onDelete(index)}
                    onToggleComplete={()=>onToggleComplete(index)}
                />
            ))}
        </ul>
    );
}

export default TodoList;
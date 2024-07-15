import React from "react";
import "./TodoItem.css"

function TodoItem({todo, onDelete, onToggleComplete}) {
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggleComplete}
            />
            {todo.text}
            <button onClick={onDelete}>삭제</button>
        </li>
    );
}

export default TodoItem;
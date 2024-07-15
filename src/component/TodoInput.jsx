import React from "react";
import './TodoInput.css';

function TodoInput({todo, onChange, onAdd}) {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onAdd();
        }
    };

    return (
        <label>
            <input
                id="taskInput"
                type="text"
                value={todo}
                onChange={onChange}
                onKeyPress={handleKeyPress}
            />
            <button id="inputButton" type="submit" onClick={onAdd}>+</button>
        </label>
    )
}

export default TodoInput;
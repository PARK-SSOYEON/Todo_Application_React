import React, {useState} from "react";
import TodoInput from "../component/TodoInput";
import TodoList from "../component/TodoList";
import DoneList from "../component/DoneList";
import useLocalStorage from "../hook/useLocalStorage";
import './MainPage.css'

function MainPage(props) {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useLocalStorage("todos",[]);
    const [doneTodos, setDoneTodos] = useLocalStorage("doneTodos",[]);

    const handleChangeTodo = (event) => {
        setTodo(event.target.value);
    }

    const handleAdd=() => {
        if(todo.trim() !== '') {
            setTodos([...todos, { text: todo, completed: false }]);
            setTodo('');
        }
    };

    const handleDelete=(index)=>{
        setTodos(todos.filter((_,i)=>i !== index));
    }

    const handleDeleteDone=(index)=>{
        setDoneTodos(doneTodos.filter((_,i)=>i !== index));
    }

    const handleToggleComplete = (index) => {
        const updatedTodos = todos.map((todo, i) => {
            if(i===index) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });

        const completedTodos = updatedTodos.filter((todo) => todo.completed);
        const incompleteTodos = updatedTodos.filter((todo) => !todo.completed);

        setTodos(incompleteTodos);
        setDoneTodos([...doneTodos, ...completedTodos]);
    };

    const handleToggleUnComplete=(index)=>{
        const updatedDoneTodos = doneTodos.map((todo,i) => {
            if (i===index) {
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });

        const completedTodos = updatedDoneTodos.filter((todo) => todo.completed);
        const incompleteTodos = updatedDoneTodos.filter((todo) => !todo.completed);

        setTodos([...todos, ...incompleteTodos]);
        setDoneTodos(completedTodos);
    };

    return (
      <div className="MainPage">
          <TodoInput todo={todo} onChange={handleChangeTodo} onAdd={handleAdd}/>

          <section>
              <h2>~ing</h2>
              <TodoList
                  todos={todos}
                  onDelete={handleDelete}
                  onToggleComplete={handleToggleComplete}
              />
          </section>

          <hr/>

          <section>
              <h2>Done</h2>
              <DoneList
                  todos={doneTodos}
                  onDelete={handleDeleteDone}
                  onToggleComplete={handleToggleUnComplete}
              />
          </section>
      </div>
    );
}

export default MainPage;
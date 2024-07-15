import React from "react";
import MainPage from "./pages/MainPage";
import './App.css'

function App(props) {
  return (
      <div className="App">
          <header>
              <h1>Todo List</h1>
          </header>
          <main>
              <MainPage/>
          </main>
          <footer>
              <p>&copy; 2024 Ellie Park. All rights reserved.</p>
          </footer>
      </div>
  )
}

export default App;

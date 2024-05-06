import Menu from './Menu'
import Restaurant from "./Project Cards/Project-Restaurant.jsx"
import Weather from "./Project Cards/Project-WeatherApp.jsx"
import TicTacToe from "./Project Cards/Project-Tic-Tac-Toe.jsx"
import ToDoList from "./Project Cards/Project-To-Do-List.jsx"
import Connect4 from "./Project Cards/Project-Connect-4.jsx"

const styles = {
    card: {
      margin: '15px',
      width: '18rem'
    }
  }

function Projects() {
  return (
    <div>
        <Menu />
        <h1 className="p-4">Projects</h1>
        <div className="row">
          <ToDoList />
          <Restaurant />
          <Connect4 />
          <TicTacToe />
          <Weather />
        </div>
    </div>
  );
}

export default Projects;
import Menu from './Menu'
import Restaurant from "./Project-Restaurant.jsx"

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
        <Restaurant />
    </div>
  );
}

export default Projects;
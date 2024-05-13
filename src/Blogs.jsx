import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Card7 from "./Blog Cards/Card-7.jsx"
import Card6 from "./Blog Cards/Card-6.jsx"
import Card8 from "./Blog Cards/Card-8.jsx"
import Card9 from "./Blog Cards/Card-9.jsx"
import Card10 from "./Blog Cards/Card-10.jsx"

const styles = {
    card: {
      margin: '15px',
      width: '18rem'
    }
  }

function RestaurantProject() {
  return (
    <div>
        <Menu />
        <h1 className="p-4">Blogs</h1>
        <div className="row">
            <Card10 />
            <Card9 />
            <Card8 />
            <Card7 />
            <Card6 />
        </div>
    </div>
  );
}

export default RestaurantProject;
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Card7 from "./Card-7.jsx"
import Card6 from "./Card-6.jsx"
import Card8 from "./Card-8.jsx"

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
            <Card8 />
            <Card7 />
            <Card6 />
        </div>
    </div>
  );
}

export default RestaurantProject;
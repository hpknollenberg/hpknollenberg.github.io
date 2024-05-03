import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

const styles = {
    card: {
      margin: '15px',
      width: '18rem'
    }
  }

function ToDoList() {
  return (
    <Card style={{...styles.card}}>
            <Card.Body>
            <Card.Title>To-Do List</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">05/03/2023</Card.Subtitle>
            <Card.Text>
            This project consisted of creating a To-Do List via React...
            </Card.Text>
            <Link to="https://to-do-list-zeta-rust.vercel.app/">See More</Link>
        </Card.Body>
    </Card>
  );
}

export default ToDoList;
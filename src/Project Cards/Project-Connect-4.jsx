import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

const styles = {
    card: {
      margin: '30px',
      width: '18rem',
      boxShadow: '10px 10px 10px rgb(72, 15, 72)'
    }
  }

function Restaurant() {
  return (
    <Card style={{...styles.card}}>
            <Card.Body>
            <Card.Title>Connect-4</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">04/19/2023</Card.Subtitle>
            <Card.Text>
            This project - a more complex extension of the tic-tac-toe project - consisted of creating a connect-4 game via JavaScript...
            </Card.Text>
            <Link to="https://hpknollenberg.github.io/connect-four/">See More</Link>
        </Card.Body>
    </Card>
  );
}

export default Restaurant;
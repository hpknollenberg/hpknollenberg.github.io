import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

const styles = {
    card: {
      margin: '30px',
      width: '18rem',
      boxShadow: '10px 10px 10px rgb(72, 15, 72)'
    }
  }

function CinemaSocial() {
  return (
    <Card style={{...styles.card}}>
            <Card.Body>
            <Card.Title>Cinema Social</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">06/21/2023</Card.Subtitle>
            <Card.Text>
            My capstone project for Awesome Inc.'s web development bootcamp. This project utilized React Javascript and Django...
            </Card.Text>
            <Link to="https://cinemasocial.vercel.app/">See More</Link>
        </Card.Body>
    </Card>
  );
}

export default CinemaSocial;
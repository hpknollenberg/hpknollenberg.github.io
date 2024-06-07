import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

const styles = {
    card: {
      margin: '30px',
      width: '18rem',
      boxShadow: '10px 10px 10px rgb(72, 15, 72)'
    }
  }

function SocialMedia() {
  return (
    <Card style={{...styles.card}}>
            <Card.Body>
            <Card.Title>Social Media App</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">06/07/2023</Card.Subtitle>
            <Card.Text>
            This project consisted of creating a Social Media app via React JavaScript and Django...
            </Card.Text>
            <Link to="https://social-media-teal-one.vercel.app/">See More</Link>
        </Card.Body>
    </Card>
  );
}

export default SocialMedia;
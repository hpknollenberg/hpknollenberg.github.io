import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom'

const styles = {
    card: {
      margin: '30px',
      width: '18rem',
      boxShadow: '10px 10px 10px rgb(72, 15, 72)'
    }
  }

function Card6() {
  return (
    <Card style={{...styles.card}}>
      <Card.Body>
        <Card.Title>Henry's Week 6 Blog</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">04/12/2023</Card.Subtitle>
        <Card.Text>
        This week we developed our skills further concerning Javascript, Bootstrap...
        </Card.Text>
        <NavLink to="/blog-6">Read More</NavLink>
      </Card.Body>
    </Card>
  );
}

export default Card6;
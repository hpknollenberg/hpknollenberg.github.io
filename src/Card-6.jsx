import Card from 'react-bootstrap/Card';

const styles = {
    card: {
      margin: '15px',
      width: '18rem'
    }
  }

function TextExample() {
  return (
    <Card style={{...styles.card}}>
      <Card.Body>
        <Card.Title>Henry's Week 6 Blog</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">04/12/2023</Card.Subtitle>
        <Card.Text>
        This week we developed our skills further concerning Javascript, Bootstrap...
        </Card.Text>
        <Card.Link href="./blog-6">Read More</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default TextExample;
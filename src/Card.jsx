import Card from 'react-bootstrap/Card';

function TextExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Pseudo-Code</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">04/19/2023</Card.Subtitle>
        <Card.Text>
        Pseudo-coding is the process of writing out the logic of one’s code in plain language...
        </Card.Text>
        <Card.Link href="./blog-7">Read More</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default TextExample;
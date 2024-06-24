import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardText from "react-bootstrap/CardText";

const SingleBook = ({ book }) => {
  return (
    <Col xs={12} md={6} lg={4}>
      <Card id="single-book-card">
        <Card.Img variant="top" src={book.book_image} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>Author: {book.author}</Card.Text>
          <CardText>Scopri di più</CardText>
        </Card.Body>
        <Button variant="outline-dark">Acquista</Button>
      </Card>
    </Col>
  );
};

export default SingleBook;

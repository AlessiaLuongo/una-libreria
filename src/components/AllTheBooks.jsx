import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import SingleBook from "./SingleBook";

import { useEffect } from "react";
import { fetchAllBooks } from "../redux/action";
import { Col } from "react-bootstrap";

const AllTheBooks = () => {
  const dispatch = useDispatch();
  const allTheBooks = useSelector((state) => state.getAllBooks.books);

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);

  console.log(allTheBooks);

  return (
    <Container className="pt-5">
      <Row className="pt-4 justify-content-center align-content-center">
        <Col>
          <Row className="p-5 g-5 justify-content-center align-content-center">
            {allTheBooks && allTheBooks.length > 0 ? (
              allTheBooks.map((book, index) => (
                <SingleBook key={index} book={book} />
              ))
            ) : (
              <p>No Books found</p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AllTheBooks;

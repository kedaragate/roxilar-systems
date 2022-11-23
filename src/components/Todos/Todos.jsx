import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import UserEntries from "../UserEntries/UserEntries";

export default function Todos({ todoData }) {
  // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
  const tableEntries = todoData.map((data) => <UserEntries data={data} />);
  return (
    <Container className="todo-container">
      <Row>
        <Col>
          ToDo ID
          <i className="fa-solid fa-sort"></i>
        </Col>
        <Col>Title</Col>
        <Col>Status</Col>
        <Col>Action</Col>
      </Row>
      {tableEntries}
    </Container>
  );
}

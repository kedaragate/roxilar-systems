import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import UserDetails from "../UserDetails/UserDetails";
import { useState } from "react";

export default function UserEntries({ data }) {
  let [userData, setUserData] = useState({});
  let [isButtonClicked, setIsButtonClicked] = useState(false);
  function handleViewUserBtn(e) {
    // console.log(e.target.id);
    setUserData(() => {
      return {
        ToDoID: data.id,
        ToDoTitle: data.title,
        userID: e.target.id,
      };
    });
    setIsButtonClicked(!isButtonClicked);
  }

  return (
    <>
      <Row className="userEntry-row" key={data.id}>
        <Col>{data.id}</Col>
        <Col>{data.title}</Col>
        <Col>{data.completed ? "Complete" : "Incomplete"}</Col>
        <Col>
          <button
            className="view-user-btn"
            id={data.userId}
            onClick={(e) => handleViewUserBtn(e)}
          >
            View User
          </button>
        </Col>
      </Row>
      {isButtonClicked ? <UserDetails data={userData} /> : null}
    </>
  );
}

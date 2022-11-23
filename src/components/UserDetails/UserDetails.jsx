import { useState } from "react";

export default function UserDetails(props) {
  const [viewUser, setViewUser] = useState({});
  const { ToDoID, ToDoTitle, userID } = props.data;

  fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then((response) => response.json())
    .then((data) =>
      setViewUser(() => {
        return {
          name: data.name,
          email: data.email,
        };
      })
    )
    .catch((err) => console.log(err));
  return (
    <div className="userCard">
      <h3>User Details</h3>
      <p>ToDoID: {ToDoID}</p>
      <p>ToDoTitle: {ToDoTitle}</p>
      <p>userID: {userID}</p>
      <p>Name: {viewUser.name}</p>
      <p>Email: {viewUser.email}</p>
    </div>
  );
}

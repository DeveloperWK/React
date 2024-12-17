import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { db } from "../Firebase/firebaseConfig";

const AddUser = () => {
  const [users, setUsers] = useState({
    name: "",
    email: "",
  });

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    addDoc(collection(db, "users"), users);
  };
  return (
    <>
      <Form className="w-50 mx-auto my-5" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={users.name}
            onChange={(e) => setUsers({ ...users, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={users.email}
            onChange={(e) => setUsers({ ...users, email: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          
          Add User
        </Button>
      </Form>
    </>
  );
};

export default AddUser;

import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { auth } from "../Firebase/firebaseConfig";

const SignupForm: React.FC = () => {
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);
  //   console.log(auth?.currentUser?.email);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, users.email, users.password);
    setSuccess(true);
  };
  return (
    <section className="w-50 mx-auto my-5">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            value={users.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          id="inputPassword5"
          value={users.password}
          onChange={handleChange}
          aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text>
        <br></br>
        <Button variant="primary" type="submit" className="my-3">
          Submit
        </Button>
      </Form>
      {success ? (
        <Alert show={success} variant="success">
          <Alert.Heading>Success</Alert.Heading>
          <p>Account Created Successfully</p>
        </Alert>
      ) : null}
    </section>
  );
};

export default SignupForm;

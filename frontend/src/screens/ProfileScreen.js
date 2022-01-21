import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { getUserDetails } from "../actions/userActions";

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }else {
        if(!user.name) {
            dispatch(getUserDetails('profile'))
        }else {
            setName(user.name)
            setEmail(user.email)
        }
    }
  }, [dispatch, history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
        // dispatch update profile
    //   dispatch(register(name, email, password));
    }
  };

  return (
      <Row>
            <Col md = {3}>
                <h2>User Profile Up</h2>
                {message && <Message variant="danger">{message}</Message>}
                {error && <Message variant="danger">{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="password">
                    <Form.Label>Password Address</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    <Button type="submit" variant="primary">
                        Update
                    </Button>
                </Form>
            </Col>
            <Col mid ={9}>
                <h2>My orders</h2>
            </Col>
      </Row>
  );
};

export default ProfileScreen;
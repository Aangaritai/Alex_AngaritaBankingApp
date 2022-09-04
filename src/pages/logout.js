import { UserContext } from "../context";
import LoginButton from "../components/loginbutton";
import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import * as React from 'react';

function Logout() {
  const ctx = useContext(UserContext);
  return (
    <>
      <div className="text-end">{ctx.users[0].name}</div>
      <Row>
        <Col className="text-end">
          <LoginButton />
        </Col>
      </Row>
      <h1>You have succesfully logout</h1>
    </>
  );
}

export default Logout;

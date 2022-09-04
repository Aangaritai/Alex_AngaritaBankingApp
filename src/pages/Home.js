import logo from '../bank.png'
import React from "react";
import { useContext } from "react";
import { UserContext } from "../context";
import LoginButton from "../components/loginbutton";
import { Row, Col } from "react-bootstrap";

export default function Home(){
  const ctx = useContext(UserContext);  
  return (
    <>
    <div className="text-end text-uppercase">{ctx.users[0].name}</div>
    <Row>
      <Col className="text-end">
        <LoginButton />
      </Col>
    </Row>      
      <div className="app">
       <div className="welcome">        
        <div className="title">Welcome to the bank</div>
        <div>For all your banking needs</div>        
        <div>You can move around using the navigation bar.</div>
        <img src={logo} alt="logo" height="60%" weight="60%"></img>
       </div>
     </div>
     </>
    );  
}
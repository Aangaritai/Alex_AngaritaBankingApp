import { useState, useContext } from "react";
import Card from "../context";
import { UserContext } from "../context";
import LoginButton from "../components/loginbutton";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as React from 'react';

function Deposit() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState("");
  const [isDisabled, setIsdisabled] = useState(true);
  const ctx = useContext(UserContext);
  //const label = {}
  
  function validate(field) {
    
    if (Number(field) === field) {
      //setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      alert("Input not valid. You have to enter a number",field);
      clearForm();
      return false;
    }
    if (Number(field) <= 0) {
      alert("Input not valid. You have to enter a positive number more than 0");
      clearForm();
      return false;
    }

    return true;
  }

  function handleDeposit() {
    console.log(amount);
    if (!validate(amount, "amount")) return;
    ctx.users[0].balance += parseInt(amount);
    setShow(false);
  }

  function clearForm() {
    setAmount("");
    setIsdisabled(true);
    setShow(true);
  }

  return (
    <>
      {ctx.users[0].name === "" ? (
        <>
          <Row>
            <Col className="text-end">
              <LoginButton />
            </Col>
          </Row>
          <div className="text-center fs-4 mt-5">
            Please <span className="fw-bold">log in</span> to be able to make a
            deposit. <br />
            If you don't have an account,{" "}
            <NavLink to="/createaccount/">create one</NavLink> for free.
          </div>
        </>
      ) : (
        <>
          <div className="text-end text-uppercase">{ctx.users[0].name}</div>
          <Row>
            <Col className="text-end">
              <LoginButton />
            </Col>
          </Row>
          {show ? (
            <Card
              style={{ maxWidth: "25rem", marginTop: "4rem" }}
              bgcolor="dark"
              header="Make a deposit"
              status={status}
              body={
                <>
                  <h3>Balance: ${ctx.users[0].balance}</h3>
                  <br />
                  Deposit Amount
                  <br />
                  <input
                    type="input"
                    className="form-control"
                    id="amount"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.currentTarget.value);
                      setIsdisabled(false);
                      if (!e.currentTarget.value) setIsdisabled(true);
                    }}
                  />
                  <br />
                  <button
                    disabled={isDisabled ? true : false}
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleDeposit}
                  >
                    Deposit
                  </button>
                </>
              }
            />
          ) : (
            <Card
              style={{ maxWidth: "25rem", marginTop: "4rem" }}
              bgcolor="dark"
              header="Deposit"
              status={status}
              body={
                <>
                  <h5 className="fs-2 text-primary">Success</h5>
                  <br />
                  <h5>You have deposited ${amount} </h5>
                  <div>Your balance is now ${ctx.users[0].balance} </div>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={clearForm}
                  >
                    Make another deposit
                  </button>
                </>
              }
            />
          )}
        </>
      )}
    </>
  );
}

export default Deposit;

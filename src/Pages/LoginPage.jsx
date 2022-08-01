import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  justify-content: center;
  height: calc(100vh - 56px);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #eeeeee;
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;
const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const MessageStyle = styled.p`
  color: red;
`;
const LoginPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  function updateForm(value) {
    return setUserData((prev) => {
      return { ...prev, ...value };
    });
  }
  const newPerson = { ...userData };
  async function getData() {
    try {
      const res = await fetch("http://localhost:5000/home", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (!res.status === 200) {
        const error = new Error(res.error);
        navigate("/login");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  }

  useEffect(() => {
    document.title="Login Leaders"
    let isActive = true;
    if (isActive) {
      getData();
      return () => {
        isActive = false;
      };
    }
  }, []);
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...userData };

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    });
    const data = await res.json();
    if (res.status === 400) {
      setMessage(data.message);
      setSpinner(false);
    } else {
      window.alert("successfully loged in");
      setMessage(data.message);
      navigate("/");
    }
    console.log(data.email);
  }
  function handleSpinner() {
    setSpinner(true);
  }
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to Leaders</SubTitle>
        <MessageStyle>{message}</MessageStyle>
        <Form method="post" onSubmit={onSubmit}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            placeholder="email"
            name="email"
            required
            onChange={(e) => updateForm({ email: e.target.value })}
            value={userData.email}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            placeholder="password"
            name="password"
            required
            onChange={(e) => updateForm({ password: e.target.value })}
            value={userData.password}
          />
          <Button variant="contained" onClick={handleSpinner} type="submit">
            {" "}
            {spinner && userData.email ? (
              <TailSpin color="#00BFFF" height={25} width={25} />
            ) : (
              "Sign In"
            )}
          </Button>
        </Form>
        <Link to="/register" style={{ textDecoration: "none" }}>
          Create Account
        </Link>
      </Wrapper>
    </Container>
  );
};
export default LoginPage;

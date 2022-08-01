import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { TailSpin } from "react-loader-spinner";
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

  padding: 20px 50px;
  background-color: #fcf8e8;
  gap: 5px;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 0;
`;
const SubTitle = styled.h2`
  font-size: 20px;
  margin: 0;
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
const RegisterPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  function updateForm(value) {
    return setUserData((prev) => {
      return { ...prev, ...value };
    });
  }
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...userData };

    const res = await fetch("http://localhost:5000/register", {
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
      window.alert(
        "You have registered successfully. Kindly login with your email and password"
      );
      navigate("/login");
      setSpinner(false);
    }
    console.log(data);
  }
  function handleSpinner() {
    setSpinner(true);
  }
  return (
    <Container>
      <Wrapper>
        <Title>Sign Up</Title>
        <SubTitle>to continue to Leaders</SubTitle>
        <MessageStyle>{message}</MessageStyle>
        <Form action="" method="post" onSubmit={onSubmit}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            placeholder="Name"
            name="name"
            value={userData.name}
            required
            onChange={(e) => updateForm({ name: e.target.value })}
          />{" "}
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            required
            onChange={(e) => updateForm({ email: e.target.value })}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={userData.phoneNumber}
            required
            onChange={(e) => updateForm({ phoneNumber: e.target.value })}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            required
            onChange={(e) => updateForm({ password: e.target.value })}
          />
          <Button variant="contained" onClick={handleSpinner} type="submit">
            {" "}
            {spinner && userData.email ? (
              <TailSpin color="#00BFFF" height={25} width={25} />
            ) : (
              "Sign Up"
            )}
          </Button>
        </Form>
        <Title>or</Title>
        <SubTitle>Sign up with google</SubTitle>
        <Link style={{ textDecoration: "none" }} to="/login">
          Already have account
        </Link>
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;

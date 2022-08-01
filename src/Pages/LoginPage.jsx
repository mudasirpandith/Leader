import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
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
  border: solid 1px;
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
const Input = styled.input`
  padding: 10px;
  background-color: transparent;
  border-radius: 3px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const LoginPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to Leaders</SubTitle>
        <Form action="" method="post">
          <Input type="email" placeholder="username" name="username" required />
          <Input
            type="password"
            placeholder="password"
            name="password"
            required
          />
          <Button type="submit" variant="contained">
            Sign In
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

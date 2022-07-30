import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
const Container = styled.div`
  display: flex;
  flex: 1;
`;
const Nav = styled.div`
  width: 100%;
  position: sticky;
  top: 0px;
`;
function App() {
  const props = {
    items: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Doc",
        link: "/",
      },
      {
        text: "Custom",
        link: "/",
      },
      {
        text: "Contact",
        link: "/",
      },
    ],
    logo: {
      text: "Leaders",
    },
    style: {
      barStyles: {
        background: "white",
        color: "grey",
      },
      sidebarStyles: {
        background: "white",

        buttonColor: "grey",
      },
    },
  };
  return (
    <>
      <Nav className="home">
        <Navbar {...props} />
      </Nav>

      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;

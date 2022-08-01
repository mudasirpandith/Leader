import "./App.css";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
import { BrowserRouter, Route, Routes ,Link} from "react-router-dom";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import Logo from "../src/Images/logo.png";
import { AccountCircle } from "@mui/icons-material";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
const Container = styled.div`
  display: flex;
  flex: 1;
`;
const Nav = styled.div`
  width: 100%;
  position: sticky;
  z-index: 1;
  top: 0px;
`;
const Image = styled.img``;
function App() {
  const props = {
    items: [
      {
        text: "Home",
        link:"/",
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
      {
        text: <AccountCircle />,
        link: "/login",
      },
    ],
    logo: {
      text: <Image src={Logo} alt="Leaders" />,
      link: "/",
    },
    style: {
      barStyles: {
        background: "white",
        color: "blue",
      },
      sidebarStyles: {
        background: "white",
        color: "black",
        buttonColor: "blue",
      },
      logoStyles: {
        fontSize: "30px",
        color: "blue",
      },
      linkStyles: {
        color: "black",
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
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;

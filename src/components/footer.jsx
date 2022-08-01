import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImage from "../Images/logo.png";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  MailOutline,
  Twitter,
  YouTube,
} from "@mui/icons-material";
const Footer = styled.div`
  color: #354259;
  margin: 30px 10px 0 10px;

  display: flex;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
const FooterHeading = styled.h2`
  font-size: 20px;
`;
const FooterBranding = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  @media (max-width: 450px) {
    flex: 1;
  }
`;
const Logo = styled.img`
  width: 200px;
  height: 50px;
`;
const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  @media (max-width: 450px) {
    flex: 1;
  }
`;
const FooterContact = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  @media (max-width: 450px) {
    flex: 1;
  }
`;
const FooterSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  @media (max-width: 450px) {
    flex: 1;
  }
`;
const FooterItems = styled.div`
  font-size: 15px;
  cursor: pointer;
  padding: 4px;
`;
const CopyRight = styled.div`
  display: flex;
  flex: 1;
  margin: 10px auto 0;
`;
const FooterElement = () => {
  return (
    <>
      <Footer>
        <FooterBranding>
          <Link style={{ textDecoration: "none" }} to="/">
            {" "}
            <Logo src={LogoImage} />
          </Link>

          <FooterItems>
            We are the <strong>Revolution</strong>.
          </FooterItems>
        </FooterBranding>
        <FooterLinks>
          <FooterHeading>HELPFUL LINKS</FooterHeading>

          <FooterItems>Test Series</FooterItems>
          <FooterItems>Privacy policy</FooterItems>
          <FooterItems>Refund And Cancellation Policy</FooterItems>
          <FooterItems>Terms And Conditions</FooterItems>
        </FooterLinks>
        <FooterContact>
          {" "}
          <FooterHeading>GET IN TOUCH </FooterHeading>
          <FooterItems>
            <MailOutline /> info@leaders.live
          </FooterItems>
        </FooterContact>
        <FooterSocialMedia>
          {" "}
          <FooterHeading>CONNECT WITH US</FooterHeading>
          <FooterItems>
            <FacebookOutlined /> Facebook
          </FooterItems>
          <FooterItems>
            {" "}
            <Instagram /> Instagram{" "}
          </FooterItems>
          <FooterItems>
            {" "}
            <Twitter /> Twitter{" "}
          </FooterItems>
          <FooterItems>
            {" "}
            <YouTube /> Youtube{" "}
          </FooterItems>
          <FooterItems>
            {" "}
            <LinkedIn /> Linkedin{" "}
          </FooterItems>
        </FooterSocialMedia>
      </Footer>
      <CopyRight>
        <FooterItems>LEADERS © {new Date().getFullYear()}</FooterItems>
      </CopyRight>
    </>
  );
};

export default FooterElement;

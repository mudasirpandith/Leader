//import { ArrowForwardIos } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import HomeImage from "../Images/homeImage.png";
import { Button } from "@mui/material";
import {
  ArrowForwardIosSharp,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  MailOutline,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import SmallCards from "../components/smallCards";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import LogoImage from "../Images/logo.png";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
`;
const Wrapper = styled.div`
  
  display: flex;
  text-align: left
  flex: 1;
  padding: 30px;
  margin: 0 auto;
  flex-wrap: wrap;
  color: #354259;
  @media (max-width: 450px) {
    flex: 1;
    flex-direction: column;
    gap: 40px;
    flex-wrap: wrap;
    margin: 0 10px;
    background-color: white;
  }
`;
const Image = styled.img`
  height: 600px;

  width: 100%;
  @media (max-width: 450px) {
    flex: 1;
    height: 300px;
    width: 100%;
  }
`;
const ImagePart = styled.div`
  diplay: flex;
  margin: 0 auto;
  align-items: center;
  flex: 4;
`;
const TextPart = styled.div`
  diplay: flex;
  flex: 4;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`;

const Heading = styled.h1`
  font-size: 40px;
  margin: 20px 0;
  @media (max-width: 450px) {
    font-size: 30px;
  }
`;
const SubHeading = styled.h3`
  font-size: 30px;
  margin: 20px 0;
  color: #a2b5bb;
  @media (max-width: 450px) {
    font-size: 20px;
  }
`;
const Section2 = styled.div`
  display: flex;
  margin: 10px 30px;
  color: #354259;
  gap: 30px;
  @media (max-width: 450px) {
    flex-direction: column;
    gap: 10px;
  }
`;
const Section2Heading = styled.h1`
  display: flex;
  flex: 3;
`;
const Section2Details = styled.p`
  display: flex;
  color: black;
  flex: 5;
`;
const Hr = styled.div`
  color: white;
  background-color: grey;
  height: 0.1px;
  border: none;
  margin: 0 30px;
  max-width: 100%;
`;
const Section3 = styled.div`
  color: #354259;
  display: flex;
  padding-bottom: 50px;

  flex-direction: column;
  gap: 10px;
  @media (max-width: 450px) {
    gap: 10px;
  }
`;
const Section3Heading = styled.h1`
  display: flex;
  flex: 3;
  margin: 10px 30px;
`;
const Section3Cards = styled.div`
  color: #354259;
  display: flex;
`;

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

  padding: 4px;
`;
const CopyRight = styled.div`
  display: flex;
  flex: 1;
  margin: 10px auto 0;
`;
const HomePage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <div
        style={{
          height: window.innerHeight - 90,
        }}
      >
        <Wrapper>
          <TextPart>
            <Heading> Want to excel in NEET 2023 ?</Heading>
            <SubHeading>We prepare students to top the exams</SubHeading>
            <Button endIcon={<ArrowForwardIosSharp />} variant="contained">
              Sign Up
            </Button>
          </TextPart>
          <ImagePart>
            <Image src={HomeImage} />
          </ImagePart>
        </Wrapper>
      </div>
      <Hr />
      <Section2>
        <Section2Heading>What we do?</Section2Heading>
        <Section2Details>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          exercitationem molestias, perferendis dicta iste enim impedit veniam
          mollitia sapiente quo facere fugiat ducimus cupiditate ad praesentium
          atque illum blanditiis illo! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatum illo eveniet consequatur aspernatur velit
          neque! Animi magni eius maxime voluptatem dignissimos facere sed odio
          deserunt perspiciatis. Facere quo repellendus beatae! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Commodi quam suscipit
          asperiores inventore in, deleniti placeat non nemo laudantium ab vitae
          doloribus laboriosam sed possimus explicabo corrupti ea nostrum illo.
        </Section2Details>
      </Section2>
      <Hr />
      <Section3>
        <Section3Heading>New Test</Section3Heading>
        <Section3Cards>
          <Box
            sx={{
              maxWidth: window.innerWidth,
            }}
          >
            <Tabs
              value={value}
              visibleScrollbar={false}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons={true}
            >
              {" "}
              <Tab label={<SmallCards />} /> <Tab label={<SmallCards />} />{" "}
              <Tab label={<SmallCards />} /> <Tab label={<SmallCards />} />{" "}
              <Tab label={<SmallCards />} /> <Tab label={<SmallCards />} />{" "}
              <Tab label={<SmallCards />} /> <Tab label={<SmallCards />} />{" "}
              <Tab label={<SmallCards />} /> <Tab label={<SmallCards />} />{" "}
              <Tab label={<SmallCards />} /> <Tab label={<SmallCards />} />{" "}
              <Tab label={<SmallCards />} /> <Tab label={<SmallCards />} />{" "}
              <Tab label={<SmallCards />} /> <Tab label={<SmallCards />} />{" "}
              <Tab label={<SmallCards />} /> <Tab label={<SmallCards />} />{" "}
              <Tab label={<SmallCards />} /> <Tab label={<SmallCards />} />{" "}
              <Tab label={<SmallCards />} /> <Tab label={<SmallCards />} />{" "}
              <Tab label={<SmallCards />} />{" "}
            </Tabs>
          </Box>
        </Section3Cards>
      </Section3>
      <Footer>
        <FooterBranding>
          <Logo src={LogoImage} />
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
    </Container>
  );
};

export default HomePage;

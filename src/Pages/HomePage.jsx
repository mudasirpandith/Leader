//import { ArrowForwardIos } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import HomeImage from "../Images/homeImage.png";
import { Button } from "@mui/material";
import { ArrowForwardIosSharp } from "@mui/icons-material";
import SmallCards from "../components/smallCards";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import FooterElement from "../components/footer";
import Testmonials from "../components/testmonials";
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
  color: #354259;
  margin: 10px 30px;
`;
const Section3Cards = styled.div`
  color: #354259;
  display: flex;
  gap: 10px;
`;
const TestmonialsSection = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
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
            <Heading> Want to excel in NEET/JEE 2023 ?</Heading>
            <SubHeading>Join us to top the exam.</SubHeading>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button endIcon={<ArrowForwardIosSharp />} variant="contained">
                Sign Up
              </Button>
            </Link>
          </TextPart>
          <ImagePart>
            <Image src={HomeImage} />
          </ImagePart>
        </Wrapper>
      </div>

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

      <Section3>
        <Section3Heading>New Tests</Section3Heading>
        <Section3Cards>
          <Box
            sx={{
              maxWidth: window.innerWidth - 30,
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
              <Tab label={<SmallCards />} />{" "}
            </Tabs>
          </Box>
        </Section3Cards>
      </Section3>
      <Section3Heading>Testimonials</Section3Heading>
      <TestmonialsSection>
        <Testmonials /> <Testmonials /> <Testmonials /> <Testmonials />{" "}
        <Testmonials />
      </TestmonialsSection>
      <FooterElement />
    </Container>
  );
};

export default HomePage;

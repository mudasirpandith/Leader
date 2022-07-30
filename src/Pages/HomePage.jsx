//import { ArrowForwardIos } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import HomeImage from "../Images/homeImage.png";
//import { Button } from "@mui/material";
import SmallCards from "../components/smallCards";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  color: #354259;
  background-color: #cfd2cf;
  @media (max-width: 450px) {
    flex: 1;
    flex-direction: column;
 
    background-color: white;
  }
`;

const LeftPart = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  margin: auto;
  @media (max-width: 450px) {
    justify-content: space-between;
    flex: 1;
    height: 500px;
  }
`;
const ImagePart = styled.div`
  display: flex;
  background-color: white;
  flex: 1 @media (max-width: 450px) {
    display: flex;
    flex: 1;
  }
`;
const Heading = styled.h3`
  color: #354259;
  font-size: 20px;
  margin: 0;
`;
const TopHeading = styled.h2`
  margin: 0;
  font-size: 30px;
`;
const SubHeading = styled.p`
  margin: 0;
  font-size: 12px;
`;
const Image = styled.img`
  width: 80%;
  margin: auto;
  @media (max-width: 450px) {
    width: 100%;
    height: 250px;
  }
`;

const NewTests = styled.div`
  padding: 10px;
`;
// const NewTestCards = styled.div`
//   display: flex;
//   flex: 1;
//   gap: 10px;
//   flex-direction: horizontal;
// `;

// const Hr = styled.div`
//   margin: 15px 0;
//   color: red;

//   background-color: grey;
//   height: 1px;
//   border: none;
//   max-width: 100%;
// `;
const Button = styled.button`
  margin:10px   margin: 0;;
  width: 200px;
  height: 30px;
`;
const Nav = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
  height: 140px;
  paddind: 20px 0;
  width:300px;
  margin: auto;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 450px) {
    padding: 5px;
    width: 320px;
  }
`;
// const WhyUs = styled.div;
const HomePage = ({ props }) => {
  return (
    <Container>
      <Wrapper>
        <ImagePart>
          <Image src={HomeImage} />
        </ImagePart>
        <LeftPart>
          <TopHeading>
            We are <strong>Leaders</strong>
          </TopHeading>
          <SubHeading>
            We are the <strong>Revolution</strong>
          </SubHeading>

          <Heading>
            Do you know all concepts but still can not solve problems? We are
            here for you...
          </Heading>
          <SubHeading>
            We provide Test series for National Level competitive exams like
            NEET ,JEE Mains and for State Level Examinations.
          </SubHeading>

          <Button color="inherit" variant="contained">
            {" "}
            Take a Tour
          </Button>
        </LeftPart>
      </Wrapper>
      <NewTests>
        <Heading>New Test</Heading>
        <Nav>
          <SmallCards />
          <SmallCards />
          <SmallCards />
          <SmallCards />
          <SmallCards />
          <SmallCards />
          <SmallCards />
          <SmallCards />
          <SmallCards />
          <SmallCards />
          <SmallCards />
        </Nav>
      </NewTests>
    </Container>
  );
};

export default HomePage;

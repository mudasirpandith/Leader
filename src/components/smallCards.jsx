import React from "react";
import styled from "styled-components";
import BotanyImage from "../Images/biology.png";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 130px;
  border-radius: 10px;
  background-color: #c4dfaa;
  cursor:pointer;
`;
const Text = styled.div`
  display: flex;
  flex: 1;
  flex-direction: horizontal;
  margin-top: -35px;

  opacity: 50%;
  padding: 0 10px;
`;
const Title = styled.p`
  color: #000;
  display: flex;
  font-size: 14px;
  flex: 5;
`;
const Details = styled.p`
  display: flex;
  color: #354259;
  font-size: 14px;
  flex: 3;
`;
const Image = styled.img`
  display: flex;
  margin: 0 auto;
  padding: 10px;
  width: 220px;
  height: 110px;
`;
const SmallCards = () => {
  return (
    <>
      <Container>
        <Image src={BotanyImage} />
        <Text>
          <Title>PLANT KINGDOM</Title>
          <Details>120 Makrs</Details>
        </Text>
      </Container>{" "}
    </>
  );
};
export default SmallCards;

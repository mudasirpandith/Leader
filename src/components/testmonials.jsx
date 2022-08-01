import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: #eeeeee;
  border-radius: 8px;
`;

const TestmonailCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 250px;
`;
const TestmonailUser = styled.div`
  display: flex;
  flex-direction: horizontal;
  gap: 10px;
  padding: 10px;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Name = styled.h1`
  font-size: 16px;
`;
const Details = styled.p`
  font-size: 12px;
  margin: 5px 0 20px 40px;
`;

const Testmonials = () => {
  return (
    <Container>
      <TestmonailCard>
        <TestmonailUser>
          <Image src="https://www.mudasirpandith.live/static/media/full.508ee06bd7bc57288d4a.png" />
          <Name>Er Mir</Name>
        </TestmonailUser>
        <Details>
          This website is amazing.I joined the test series for JEE 2022 , and 10
          questions were directly asked with same numerical values.
        </Details>
      </TestmonailCard>
    </Container>
  );
};

export default Testmonials;

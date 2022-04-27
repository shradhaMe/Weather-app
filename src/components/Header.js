import React from 'react';
import styled from "styled-components";
import { Container } from "./Container";


export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <h1>Weather Forecast App</h1>
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: 15px;
  background-color: #9BDFDF;
  color: #fff;
  font-size:20px;
  box-shadow: 0px 4px 15px 0px rgba(155, 223, 223, 0.7);


  h1 {
    margin: 0;
    text-align:center;
  }
`;
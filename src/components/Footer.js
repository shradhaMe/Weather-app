import React from 'react';
import styled from "styled-components";
import { Container } from "./Container";


export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <p>&copy; 2022. All rights reserved.</p>
      </Container>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 5px;
   padding: 15px;
  background-color: #9BDFDF;
  color: #fff;
  box-shadow: 0px -5px 15px 0px rgba(155, 223, 223, 0.7);
  font-size:18px;

  p {
    margin: 0;
    text-align:center;
  }

  @media only screen and (max-width: 470px) {
    p{
      text-align:center;
    }
  }
`;
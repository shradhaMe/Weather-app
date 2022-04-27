import React from 'react';
import styled from "styled-components";

export const WeatherContainer = ({ children }) => (
   <Card>{children}</Card>
);

const Card =  styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 470px) {
    justify-content: center;
  }
`;


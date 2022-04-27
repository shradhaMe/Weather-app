import React from 'react';
import styled from "styled-components";
import { convertFahrenheitToCelsius } from "../utils";

export const WeatherCard = ({ index, item }) => (
   <Card key={item?.dt}>
      <StyledDate>{item?.dt_txt?.substring(0, 10)}</StyledDate>

      <StyledIcon src={`http://openweathermap.org/img/w/${item?.weather?.[0]?.icon}.png`} alt="weather icon" />

      <StyledContent><span>Temp:</span> {Math.round(convertFahrenheitToCelsius(item?.main?.temp))} <span>&#8451;</span></StyledContent>

      <StyledContent><span>Max. Temp:</span> {Math.round(convertFahrenheitToCelsius(item?.main?.temp_max))} <span>&#8451;</span></StyledContent>

      <StyledContent><span>Min. Temp: </span>{Math.round(convertFahrenheitToCelsius(item?.main?.temp_min))} <span>&#8451;</span></StyledContent>

      <StyledContent><span>Forecast:</span> {item?.weather?.[0]?.main}</StyledContent>

      <StyledContent><span>Feels like:</span> {Math.floor(convertFahrenheitToCelsius(item?.main?.feels_like))} <span>&#8451;</span></StyledContent>

    </Card> 
);

const Card =  styled.li`
  padding: 25px 40px;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: 8px 7px 10px 4px rgba(231, 248, 248, 0.7);
  background-color:#ffffff;
`;

const StyledDate = styled.p`
  text-align: center;
  font-size:24px;
`;

const StyledIcon = styled.img`
  display: block;
  margin: 0 auto;
  width: 75px;
  height: 75px;
  
`;

const StyledContent = styled.p`
  span:first-child {
    font-weight: bold;
  }
`;
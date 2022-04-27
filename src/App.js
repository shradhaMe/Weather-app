import axios from "axios";
import React, { useEffect ,useState } from 'react';
import styled from "styled-components";
import { WeatherCard } from "./components/WeatherCard";
import { WeatherContainer } from "./components/WeatherContainer";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const apiKey = "179be1c27904fd4a3ae12e1561ecb644"
  const [weatherData, setWeatherData] = useState([]);
  const [cityData, setCityData] = useState({});
  const cityName = "Toronto";
  
 useEffect(() => {
  getWeatherData();
 }, []);


  const getWeatherData = async () => {
    const { data } = await axios({
      method: 'GET',
      url: "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey,
      dataResponse: 'json',
    });

    setWeatherData(data?.list);
    setCityData(data?.city);
  }

  

  return (
    <div>
      <Header />
        <StyledMain>
          <Container>
            <h2>{cityData?.name} Weather Forecast for the next 5 days!</h2> 

            <WeatherContainer>{weatherData?.map((item, index) => {
              if (index % 8 === 0) {
                return (
                  <WeatherCard index={index} item={item} />
                );
              }
            })}
            </WeatherContainer>
          </Container>
        </StyledMain>
      <Footer />
    </div>
  );
}

const StyledMain = styled.main`
  height: calc(100vh - 135px);

  @media only screen and (max-width: 696px) {
    height: 100%;
  }

  h2 {
    text-align: center;
    margin-bottom: 50px;
  }
`;

export default App;

import styled from 'styled-components';

export const WeeklyWeatherHolder = styled.div`
  width: 65%;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-evenly;
  overflow-y: scroll;
  flex-wrap: wrap;
  padding-top: 10px;
  
  &::-webkit-scrollbar {
    width: 10px;
  }
  
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #26282f;
  }
`;

export const WeatherDayInfo = styled.span`
  display: flex;
  flex-direction: column;
`;

export const WeatherDayTemperature = styled.span`
    text-align: center;
    font-size: 12pt;
    color: white;
    width: 100%;
    font-family: "Arial", serif;
`;

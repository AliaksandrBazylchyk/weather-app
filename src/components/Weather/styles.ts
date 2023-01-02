import styled from 'styled-components';

export const WeatherPanel = styled.div`
  height: 35%;
  background-color: #313a4d;
  opacity: 0.9;
  display: flex;
  flex-direction: row;
`;

export const DayTitle = styled.span`
  width: auto;
  padding: 3px 10px;
  text-align: center;
  border-radius: 7px;
  background-color: rgb(43,50,65);
`;

export default WeatherPanel;

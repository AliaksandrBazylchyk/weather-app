import styled from 'styled-components';

export const CalendarPanel = styled.div`
  height: 65%;
  display: flex;
`;

export const LeftPart = styled.div`
  width: 50%;
  height: 100%;
  padding: 10% 0 0 5%;
  color: white;
`;

export const RightPart = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10% 5% 0 0;
    color: white;
    font-family: Calibri, serif;
`;

export const CityName = styled.span`
  text-align: right;
  font-size: 24pt;
`;

export const CountryAbbreviation = styled.span`
  text-align: right;
`;

export const SignButton = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
`;

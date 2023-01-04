import styled from 'styled-components';

import backgroundImage from '@assets/background-1920x1080.jpg';
import backgroundImage2 from '@assets/background-2-1920x1080.jpg';

export const HomeHandler = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: 40%;
  height: 50%;

  background-image: url(${backgroundImage2});
  background-size: cover;

  -webkit-box-shadow: 0 0 11px 6px rgba(34, 60, 80, 0.66);
  -moz-box-shadow: 0 0 11px 6px rgba(34, 60, 80, 0.66);
  box-shadow: 0 0 11px 6px rgba(34, 60, 80, 0.66);
`;

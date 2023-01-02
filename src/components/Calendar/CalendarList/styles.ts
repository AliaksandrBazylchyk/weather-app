import styled from 'styled-components';

export const CalendarHolder = styled.div`
  margin-top: 20px; 
`;

export const CalendarItem = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;    
`;

export const CalendarItemTime = styled.span`
  width: 35px;
  padding: 3px 10px;
  text-align: center;
  color: white;
  border-radius: 7px;
  background-color: rgb(43,50,65);

  display: flex;
  align-items: center;
  justify-content: center;  
`;

export const CalendarItemSummary = styled.span`
  display: block;
  width: 165px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AuthorizeHelper = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GetEventsButton = styled.button`
    
`;

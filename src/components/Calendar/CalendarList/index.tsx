import React from 'react';

import { EventItem } from '@interfaces/EventItemInterface';

import {
  AuthorizeHelper,
  CalendarHolder, CalendarItem, CalendarItemSummary, CalendarItemTime, GetEventsButton,
} from './styles';

export interface CalendarListProps {
  events: EventItem[] | null,
  getEvents: () => void,
  auth: boolean
}

const CalendarList = (props : CalendarListProps) => {
  const { events, getEvents, auth } = props;
  const convertDate = (time: Date) => new Date(time).toTimeString().substring(0, 5);
  return (
    <CalendarHolder>
      { !auth && <AuthorizeHelper>login please...</AuthorizeHelper> }
      { auth && events
        && events?.map((item) => (
          <CalendarItem key={item.id}>
            <CalendarItemTime>{`${convertDate(item.start.dateTime)}`}</CalendarItemTime>
            <CalendarItemSummary>{item.summary}</CalendarItemSummary>
          </CalendarItem>
        ))}
      { auth && !events
          && <GetEventsButton type="button" onClick={getEvents}>get</GetEventsButton>}
    </CalendarHolder>
  );
};

export default CalendarList;

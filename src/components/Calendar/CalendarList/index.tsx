import React from 'react';

import { EventItem } from '../../../types/EventItemInterface';

import './styles.css';

export interface CalendarListProps {
  events: EventItem[] | null,
  getEvents: () => void,
  auth: boolean
}

const CalendarList = (props : CalendarListProps) => {
  const { events, getEvents, auth } = props;
  const convertDate = (time: Date) => new Date(time).toTimeString().substring(0, 5);

  return (
    <div className="calendar-holder">
      { !auth && <span className="authorize-helper">login pls</span> }
      { auth && events
        && events?.map((item) => (
          <div className="calendar-item" key={item.id}>
            <span className="calendar-item-time">{`${convertDate(item.start.dateTime)}`}</span>
            <span className="calendar-item-summary">{item.summary}</span>
          </div>
        ))}
      { auth && !events
          && <button type="button" onClick={getEvents}>get</button>}
    </div>
  );
};

export default CalendarList;

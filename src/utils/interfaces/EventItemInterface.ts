export interface EventItem {
  'kind': string,
  'etag': string,
  'id': string,
  'status': string,
  'htmlLink': string,
  'created': string,
  'updated': string,
  'summary': string,
  'creator': { 'email': string, 'self': boolean },
  'organizer': { 'email': string, 'self': boolean },
  'start': { 'dateTime': Date, 'timeZone': string },
  'end': { 'dateTime': Date, 'timeZone': string },
  'iCalUID': string,
  'sequence': number,
  'reminders': { 'useDefault': boolean },
  'eventType': string,
}

export default EventItem;

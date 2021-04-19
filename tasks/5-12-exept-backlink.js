'use strict';

let room = {
  number: 23
};

let meetup = {
  title: "Meeting",
  occupiedBy: [{name: "Smith"}, {name: "Brown"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
  return (key !== '' && value === meetup) ? undefined : value;
})); //{"title":"Meeting","occupiedBy":[{"name":"Smith"},{"name":"Brown"}],"place":{"number":23}}

"use strict"; 
// let money = 1000 + 1040 + 416 + 1040 + 312 + 1040; 
// alert(money);

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: 'Ivanov'}, {name: 'Pretov'}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert ( JSON.stringify(meetup, function replacer(key, value){
return (key != '' && value == meetup) ? undefined : value;
}));
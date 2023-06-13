"use strict"; 
// let money = 1000 + 1040 + 416 + 1040 + 312 + 1040 + 100; 
// alert(money);

let lesson11 = 'Arrow fn';

let group = {
  title: 'Our Group',
  students: ['Jogn', 'Pete', 'Alice'],

  showList() {
    this.students.forEach(
      student => alert(this.title + ': ' + student)
    );
  }
};

group.showList();
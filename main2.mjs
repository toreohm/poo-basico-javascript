function StudentPlatzi({name, lesson, age}) {
  this._name = name;
  this._lesson = lesson;
  this._age = age;
}

StudentPlatzi.prototype = {
get lesson() {
  return this._lesson;
},
set lesson(nameOfLesson) {
  this._lesson = nameOfLesson;
},
get name() {
  return this._name;
},
set name(name) {
  this._name = name;
},
get age() {
  return this._age;
},
set age(age) {
  this._age = age;
}
};

const hector = new StudentPlatzi({name: "Hector", age: 38, lesson: "OOP in JavaScript"});
//-----------------------------------------
function videoPlay(id) {
  const urlSecreta = "https://platziultrasecreto.com/" + id;
  console.info("Se está reproduciendo desde la url: " + urlSecreta);
}

function videoStop(id) {
  const urlSecreta = "https://platziultrasecreto.com/" + id;
  console.info("Pausamos la url: " + urlSecreta);
}

export class PlatziClass {
  constructor({name, videoID}) {
    this.name = name;
    this.videoID = videoID;
  }  
  
  reproducir() {
    videoPlay(this.videoID);
  }

  pausar() {
    videoStop(this.videoID);
  }
}
//Ésta será la SuperClase
class Student {
  constructor({name, email, username, twitter = undefined, instagram = undefined, facebook = undefined,
  approvedCourses = [], learningPaths = []}) {
    this.name = name;
    this.email = email; 
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

class Course {
  constructor({name, classes = [], isFree = false, lang = "spanish"}) {
    this._name = name; //Por convención, los atributos y metodos que empiecen con "_" no deberan ser invocados fuera de la clase.
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }
  //Los getter y setters en las instancias no se manejan como metodos, sino como propiedades.
  //En este caso: cursoProgBasica.name - obtiene el valor de propiedad a traves del getter.
  // cursoProgBasica.name = "Otro valor"; - actualiza la propiedad a traves del setter.

  set name(nuevoNombre) {
    if(nuevoNombre.toLowerCase().includes("malo")) {
      console.warn("Nombre de curso inválido");
    } else {
      this._name = nuevoNombre;
    }
  }
}

const cursoProgBasica = new Course({
  name: "Curso gratis de programación básica",
  isFree: true});

const cursoDefinitivoHTML = new Course({name: "HTML y CSS"});

const cursoPracticoHTML = new Course({
  name: "HTML y CSS: Intermedio",
  lang: "english"});

//FreeStudent es la clase hija/derivada y Student la clase Padre/SuperClase
class FreeStudent extends Student {
  constructor(props) {
    //super hace referencia al constructor de la clase padre
    super(props);
  }

  approveCourse(newCourse) {
    if(newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimos " + this.name + ", sólo puedes tomar cursos abiertos.");
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    //super hace referencia al constructor de la clase padre
    super(props);
  }

  approveCourse(newCourse) {
    if(newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimos " + this.name + ", no puedes tomar cursos en ingles.");
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    //super hace referencia al constructor de la clase padre
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

const juan = new FreeStudent({
  name: "JuanDC", 
  username: "juandc", 
  email: "juanito@juanito.com", 
  twitter:"fjuandc",});

const miguelito = new BasicStudent({
  name: "Miguelito", 
  username: "miguelitofeliz", 
  email: "miguelito@juanito.com", 
  instagram: "miguelito_feliz",});

//Herencia a la antigua con proto. Esto aplica objetos y no a funciones
const animal = {eats: true};
const rabbit = {jumps: true };
rabbit.__proto__ = animal;  //Se aplica la herencia
console.log(rabbit);
console.log(rabbit.constructor.prototype);
console.log(rabbit.__proto__);
console.log(rabbit.eats);


/********************************************************* */
//Otro ejemplo de Herencia
var o = {
  a: 2,
  m: function() {
    return this.a + 1;
  }
};

console.log(o.m()); // 3
// Cuando en este caso se llama a o.m, 'this' se refiere a o

var p = Object.create(o);
// p es un objeto que hereda de o

p.a = 12; // crea una propiedad 'a' en p
console.log(p.m()); // 13
// cuando se llama a p.m, 'this' se refiere a p.
// De esta manera, cuando p hereda la función m de o,
// 'this.a' significa p.a, la propiedad 'a' de p


/***************************************************************** */
//Otro Ejemplo de Herencia

function Padre(a, b) {
  this.a = a;
  this.b = b;
}
Padre.prototype.sumar = function () {return this.a + this.b;};

const obj1 = new Padre(1,2);
console.group("obj1");
console.log(obj1.sumar());
console.groupEnd();

function Hijo(y,z) {
  this.y = y;
  this.z = z;
}

//Se aplica la herencia
Hijo.prototype = new Padre(1, 2); 

const obj2 = new Hijo("a", "b");
console.group("Obj2");
console.log(obj2.z);
console.log(obj2.a);
console.log(obj2.sumar());
console.groupEnd();

//Objeto literal
const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "HTML y CSS",
    "Curso Práctico de HTML y CSS"
  ],
  unMetodo: function () {console.log("Hola");},
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
};

natalia.cursosAprobados.push("Curso de Responsive Design");

//Ahora Creamos un prototipo - función constructora.
//Tenemos dos maneras de crear metodos.

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  this.xMetodo = function() {console.log("Hola");}; //Forma convencional de crear un método.
}
/*Los métodos añadidos a la propiedad prototype de una función constructora,
 están disponibles en todas las instancias de los objetos creados a partir del constructor */
Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
}

Student.prototype.removerCurso = function (curso) {
  let indice = this.cursosAprobados.indexOf(curso);
  if(indice < 0) {
    console.log("No existe el curso " + curso);
  } else {
    this.cursosAprobados.splice(indice,1);
  }
}

//Creamos una instancia de nuestro prototipo.
const anhele = new Student("Anhele", 33, ["Feminazismo", "Feminismo Radical"]);

//Prototipos con la sintaxis de clases
//Una sintaxis más moderna, pero por dentro siguen siendo los mismos prototipos.
class AnotherStudent {
  constructor(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }  

  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }

  removerCurso(curso) {
    let indice = this.cursosAprobados.indexOf(curso);
    if(indice < 0) {
      console.log("No existe el curso " + curso);
    } else {
      this.cursosAprobados.splice(indice,1);
    }  
  }
}

AnotherStudent.prototype.sumar = function (a,b) {return a + b;};

const starseed = new AnotherStudent("Kabamur", 40, ["Pleiadian magic 1", "Pleiadian light language"]);

//Otra clase con destructuración de objeto en la función constructora
class AnotherStudent2 {
  constructor({
    name, 
    age, 
    cursosAprobados = [], 
    email, 
    facebook="facebook.com/chessmastermx", 
    twitter="kabamur_taygeta"}) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    this.email = email;
    this.facebook = facebook;
    this.twitter = twitter;
  }  

  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }

  removerCurso(curso) {
    let indice = this.cursosAprobados.indexOf(curso);
    if(indice < 0) {
      console.log("No existe el curso " + curso);
    } else {
      this.cursosAprobados.splice(indice,1);
    }  
  }
}

const starseed2 = new AnotherStudent2({
  name: "Kabamur", 
  age: 40, 
  cursosAprobados: ["Pleiadian magic 1", "Pleiadian light language"],
  email: "kabamur@protonmail.com"});

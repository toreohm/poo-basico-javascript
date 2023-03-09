//En este caso trabajar con objetos literales no es escalable, cualquier cambio se tendría que hacer
// a todos los objetos que lleguemos tener, supongamos que tenemos 100 objetos literales. 
const juan1 = {
  name: "JuanDC",
  username: "juandc",
  points: 100,
  socialMedia: {
    twitter: "fjuandc",
    instagram: "fjuandc",
    facebook: undefined
  },
  approvedCourses: [
    "Curso definitivo de HTML y CSS",
    "Curso práctico de HTML y CSS",  
  ],
  learningPaths: [
    {
      name: "Escuela de desarrollo web",
      courses: [
        "Curso definitivo de HTML y CSS",
        "Curso práctico de HTML y CSS",
        "Curso de Responsive Design",
      ],
    },
    {
      name: "Escuela de videojuegos",
      courses: [
        "Curso de Introducción a la Producción de Vgs",
        "Curso de Unreal Engine",
        "Curso de Unity 3D",
      ],
    },
  ],
};

const miguelito1 = {
  name: "Miguelito",
  username: "miguelitofeliz",
  points: 1000,
  socialMedia: {
    twitter: "miguelitofeliz",
    instagram: "miguelito_feliz",
    facebook: undefined
  },
  approvedCourses: [
    "Curso DataBusiness",
    "Curso Dataviz"  
  ],
  learningPaths: [
    {
      name: "Escuela de desarrollo web",
      courses: [
        "Curso definitivo de HTML y CSS",
        "Curso práctico de HTML y CSS",
        "Curso de Responsive Design",
      ],
    },
    {
      name: "Escuela de Data Science",
      courses: [
        "Curso DataBusiness",
        "Curso Dataviz",
        "Curso Tableu",
      ],
    },
  ],
};

//Esto se puede resolver con POO, construyamos una clase entonces...
class Classes {
  constructor(name) {
    this.name = name;
  }
}
const classCicloIf = new Classes("Ciclo If/else");
const classCicloFor = new Classes("Ciclo For");
const classCicloWhile = new Classes("Ciclo While");

class Course {
  constructor({name, classes = []}) {
    this._name = name; //Por convención, los atributos y metodos que empiecen con "_" no deberan ser invocados fuera de la clase.
    this.classes = classes;
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
  classes: [classCicloIf, classCicloFor, classCicloWhile]});

const cursoDefinitivoHTML = new Course({
  name: "HTML y CSS"});

const cursoPracticoHTML = new Course({
  name: "HTML y CSS: Intermedio"});


class LearningPath {
  constructor(name, courses = []) {
    this.name = name;
    this.courses = courses;
  }
  addCourse(course) {
    this.courses.push(course);
  }
  clearCourses() {
    this.courses = [];
  }
  deleteCourse(course) {
    const index = this.courses.indexOf(course);
    if(index < 0) {
      console.log("Curso no encontrado");
    } else {
      this.courses.splice(index, 1);
    }
  }
}

const escuelaWeb = new LearningPath(
  "Escuela desarrollo web", 
  [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML]);

const escuelaData = new LearningPath(
  "Escuela de Data Science", 
  [cursoProgBasica, "Introducción a Data Science", "Python"]);

const escuelaVgs = new LearningPath(
  "Escuela de Video Juegos", 
  [cursoProgBasica, "Introducción al desarrollo de video juegos"]);

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

//Creamos las instancias de nuestro prototipo (clase)

const juan2 = new Student({
  name: "JuanDC", 
  username: "juandc", 
  email: "juanito@juanito.com", 
  twitter:"fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs
  ]});

const miguelito2 = new Student({
  name: "Miguelito", 
  username: "miguelitofeliz", 
  email: "miguelito@juanito.com", 
  instagram: "miguelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData
  ]});

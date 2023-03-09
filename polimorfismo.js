class Comment {
  constructor({content, studentName, studentRole = "student"}) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }
  publicar() {
    console.log(`${this.studentName} (${this.studentRole})
    ${this.likes} likes.
    ${this.content}`);
  }
}

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
  publicarComentario(commentContent) {
    const comment = new Comment({content: commentContent, studentName: this.name});
    comment.publicar();
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

class TeacherStudent extends Student {
  constructor(props) {
    //super hace referencia al constructor de la clase padre
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
  //Se sobreescribe el método de la superclase Student para cambiar el comportamiento de ésta.
  //Esto es POLIMORFISMO
  publicarComentario(commentContent) {
    const comment = new Comment({content: commentContent, studentName: this.name, studentRole: "teacher"});
    comment.publicar();
  }
}

const juan = new FreeStudent({
  name: "JuanDC", 
  username: "juandc", 
  email: "juanito@juanito.com", 
  twitter:"fjuandc"});

const miguelito = new BasicStudent({
  name: "Miguelito", 
  username: "miguelitofeliz", 
  email: "miguelito@juanito.com", 
  instagram: "miguelito_feliz"});

  const freddy = new TeacherStudent({
    name: "Freddy Vega", 
    username: "freddyfeliz", 
    email: "freddy@platzi.com", 
    instagram: "freddier"});

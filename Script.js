
let nombreCompleto = (nombre, apellido) => nombre + " " + apellido;

let exclamar = str => str + "!";

let mayusculas = str => str.toUpperCase();

let minusculas = str => str.toLowerCase();

console.log( nombreCompleto('Ada', 'Lovelace') ); // Ada Lovelace
console.log( exclamar('Hedy') ); // ¡Hedy!
console.log( mayusculas('grace') ); // GRACE
console.log( minusculas('SHERYL') ); // sheryl

const longitudDelNombre = (nombre = "") => nombre.length;

console.log( longitudDelNombre() ); // 0
console.log( longitudDelNombre('Ana') ); // 3

function ejecutar(){
swal({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
    button: "Aww yiss!",
  });
}


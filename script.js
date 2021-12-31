//Clase 01

/* let saludo = "Buen dia estudiante";
alert(saludo);

let nombre = prompt("Por favor ingresa tu nombre");
let curso = "JavaScript";
let email = prompt(
  `Hola ${nombre}, escribe tu email para recibir mas informacion sobre el curso de ${curso}`
);

let salario = prompt(`Escribe en pesos tu salario mensual`);
let promocion = alert(
  `Al tomar este curso de ${curso} con Coder House, duplicaras tu salario a`
);

let salarioDoble = salario * 2;
alert(salarioDoble);

let despedida = alert(
  `Gracias ${nombre}, nos pondremos en contacto muy pronto sobre el curso de ${curso}`
); */

//Clase 02

let saludo =
  "Hola querido lector: consulta lo que el universo tiene para ti. No olvides que tus respuestas deberán ser escritas con la primera letra mayúscula";
alert(saludo);

let pregunta1 = prompt("¿Qué signo zodiacal eres?");
let signo1 = "Aries";
let signo2 = "Tauro";
let signo3 = "Geminis";
let signo4 = "Cancer";
let signo5 = "Leo";
let signo6 = "Virgo";
let signo7 = "Libra";
let signo8 = "Escorpion";
let signo9 = "Sagitario";
let signo10 = "Capricornio";
let signo11 = "Acuario";
let signo12 = "Piscis";

if (pregunta1 == signo1) {
  alert("Eres muy adaptable y puedes llevarte bien con los demas");
} else if (pregunta1 == signo2) {
  alert("Eres fuerte y resistente a las adversidades");
} else if (pregunta1 == signo3) {
  alert("Eres una persona equilibrada");
} else if (pregunta1 == signo4) {
  alert("Eres muy simpático y hogareño");
} else if (pregunta1 == signo5) {
  alert("Eres un líder innato");
} else if (pregunta1 == signo6) {
  alert("Tienes claro tus planes e ideas para el futuro");
} else if (pregunta1 == signo7) {
  alert("Eres una persona muy estable");
} else if (pregunta1 == signo8) {
  alert("Tienes habilidades para negociar y alcanzar tus metas");
} else if (pregunta1 == signo9) {
  alert("Puedes ser un poco desordenado");
} else if (pregunta1 == signo10) {
  alert("Siempre encuentras una solución a las cosas");
} else if (pregunta1 == signo11) {
  alert("Das sin esperara nada a cambio");
} else if (pregunta1 == signo12) {
  alert("Eres de un carácter tranquilo y alivianado");
} else {
  alert(
    "El dato no es del todo correcto. Refresca esta página para intentarlo de nuevo"
  );
}

let aviso = alert(
  "Gracias por responder (el horóscopo nunca a sido cierto ni lo será. Buenas noches)"
);

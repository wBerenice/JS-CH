//Clase 02 = Control de flujos

let saludo =
  "Hola querido lector: consulta lo que el universo tiene para ti";
alert(saludo);

let signoUsuario = prompt("¿Qué signo zodiacal eres?").toLowerCase();

if (signoUsuario == "aries") {
  alert("Eres muy adaptable y puedes llevarte bien con los demas");
} 
else if (signoUsuario == "tauro") {
  alert("Eres fuerte y resistente a las adversidades");
} 
else if (signoUsuario == "geminis") {
  alert("Eres una persona equilibrada");
}  
else if (signoUsuario == "cancer") {
  alert("Eres muy simpático y hogareño");
} 
else if (signoUsuario == "leo") {
  alert("Eres un líder innato");
}
else if (signoUsuario == "virgo") {
  alert("Tienes claro tus planes e ideas para el futuro");
} 
else if (signoUsuario == "libra") {
  alert("Eres una persona muy estable");
} 
else if (signoUsuario == "escorpion") {
  alert("Tienes habilidades para negociar y alcanzar tus metas");
} 
else if (signoUsuario == "sagitario") {
  alert("Puedes ser un poco desordenado");
} 
else if (signoUsuario == "capricornio") {
  alert("Siempre encuentras una solución a las cosas");
} 
else if (signoUsuario == "acuario") {
  alert("Das sin esperara nada a cambio");
} 
else if (signoUsuario == "piscis") {
  alert("Eres de un carácter tranquilo y alivianado");
}   
  else {
  alert("El dato no es del todo correcto. Refresca esta página para intentarlo de nuevo");
}

let aviso = alert("Gracias por participar en el horoscopo de hoy");

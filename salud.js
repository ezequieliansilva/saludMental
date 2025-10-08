var puntaje = 0;
var pregunta = 0;
var preguntas = ["¿La depresión es una enfermedad mental común?", "¿El ejercicio regular puede ayudar a mejorar la salud mental?", "¿La ansiedad es una respuesta normal al estrés?", "¿El sueño adecuado es importante para la salud mental?", "¿Hablar con un terapeuta puede ser beneficioso para la salud mental?"];
respuestas_correctas = [0, 0, 0, 0, 0]; // Índices de las respuestas correctas
function juegazo() {
    alert("¡Bienvenido al juego de preguntas y respuestas sobre salud mental! Responde las siguientes preguntas:");
    pantalla = preguntar(pregunta);
    document.getElementById("juego").innerHTML = pantalla;

}
function verificarRespuesta(pregunta, respuesta) {
    if (respuesta === respuestas_correctas[pregunta]) {
        puntaje++;
        alert("¡Respuesta correcta!");
    } else {
        alert("Respuesta incorrecta.");
    }
    if (pregunta < preguntas.length - 1) {
        pregunta++;
        pantalla = preguntar(pregunta);
        document.getElementById("juego").innerHTML = pantalla;
    } else {
        alert("¡Juego terminado! Tu puntaje es: " + puntaje + " de " + preguntas.length);
        // Reiniciar el juego
        puntaje = 0;
        pregunta = 0;
        pantalla = '<button class="btn btn-primary" onclick="juegazo()"> ¡Jugar de nuevo!</button>';
        document.getElementById("juego").innerHTML = pantalla;
    }
}
function preguntar (pregunta) {
    var pantalla = "<h2>Pregunta " + (pregunta + 1) + " de " + preguntas.length + "</h2>";
    pantalla += "<br><p>" + preguntas[pregunta] + "</p>";
    pantalla += "<button class='btn btn-success' onclick='verificarRespuesta("+pregunta+",0)'>Sí</button>";
    pantalla += "<button class='btn btn-danger' onclick='verificarRespuesta("+pregunta+",1)'>No</button>";
    return pantalla;
}

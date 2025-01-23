const op1 = document.getElementById("op1")
const operadorAritmetico = document.getElementById("operacion")
const op2 = document.getElementById("op2")
const btnCalcular = document.getElementById("boton-calculadora")
const pResultado = document.getElementById("resultado")


function aplicarCalculadora() {
    console.log("apretaste boton calcular")
    const operacion = operadorAritmetico.value
    const operador1 = op1.value
    const operador2 = op2.value
    

    if(operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/"){
        pResultado.innerText("se puede calcular")
    }else{
        pResultado.innerText("no se puede calcular")
    }
}

var w = 10;
var b = 5;

console.log("Suma:", w + b);
console.log("Resta:", w - b);
console.log("Multipica:", w * b);
console.log("Divide:", w / b);
console.log("Modulo:", w % b);

var x = 10;
x += 20; //Es equivalente a x = x + 20
console.log("Suma y asigna:", x);

x -= 4; //Es equivalente a x = x - 4
console.log("Resta y asigna:", x);

var y = 5;
y *= 12; // Es equivalente a y = y * 12
console.log("Multiplica y asigna:", y);

//bucles
let contador = 0;
while(contador < 3){ //Mientas el contador sea menor que 3
    console.log(contador)
    contador = contador + 1;
}

console.log("parar")

for(let contador = 0; contador < 10; contador = contador +1){
    console.log(contador)
}

for (let i = 0; i < 12; i++) {
    console.log(i);
}

function multiplicar(num1, num2) {
    let resultado = num1 * num2
    return resultado
}

let receptorMultiplicador = multiplicar(2, 5)
console.log(receptorMultiplicador);



//Array de frutas
const frutas = ["manzana", "pera", "fresa", "sandía", "banano"];
frutas.push("piña");

console.log(frutas[0]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas);


//Array de colores
const colores = new Array("blanco", "verde", "rojo", "azul", "morado");
colores[2] = "negro";
colores.pop();

console.log(colores);
console.log(colores[1]);
console.log(colores[4]);
console.log(colores[2]);
console.log(colores.length);

console.log(10 === "10");
let estamosenelmar = true;
console.log(!estamosenelmar);


//Declarar variables
var nombre = "Juan";
let edadPersona = 25;
const ciudad = "Medellin";
let esEstudiante = true;

//Mostrar valores en la consola
console.log("Nombre es:", nombre);
console.log("Edad es", edadPersona);
console.log("CiudadCiudad es:", ciudad);
console.log("Estudiante es:", esEstudiante);


function saludar(nombre, edad, ciudad) {
    console.log("Hola por la función saludar, mi nombre es " + nombre + " tengo " + edad + " años y vivo en " + ciudad);
}
saludar("Pepito", 39, "Medellin");


// Array empleados Kompras
const nombreEmpleado = ["Diego", "Mariana", "Juan"];
let colaborador1k = true;

if (nombreEmpleado.includes("Olga") && colaborador1k) {
    console.log("trabaja en Kompras");
} else {
    console.log("no trabaja en kompras");
}
console.log(nombreEmpleado[2])


// Arreglos o Arrays
let miArreglo = ["David", "Santiago", "Fernando", "Alejandro"]
for(let i = 0; i < 4; i++){
    console.log("accediendo al indicador: " + i)
    let mostrar = miArreglo[i]
    console.log(mostrar)
}

//Objetos
let persona1 = {
    nombre: "David",
    edad: 24,
    masculino: true,
}
console.log(persona1);

persona1.comidaFavorida = "Hamburguesa";
persona1.nombre = "Nuevo nombre";

console.log(persona1);
console.log(persona1.comidaFavorida);

let persona2 = {
    nombre: "Luisa",
    edad: 32,
    masculino: false,
}

console.log(persona2);

let arrayObjetos = [persona1, persona2];
console.log(arrayObjetos);


/*EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.*/
function validarEdad(edad) {
    return edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
}

/* EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final. */

function determinarNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    //Definimos la nota final en base a las condiciones de porcentaje por cada uno de los cuatro aspectos que se evalúan
    const NOTA_FINAL = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
    //Retornamos los valores y redondeamos la nota final a dos decimales
    return "Alumno: " + nombre + ", Carnet: " + carnet + ", Nota Final: " + NOTA_FINAL.toFixed(2);   
}

/* EJERCICIO 3: Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial */

function calcularAumento(nombre, salario, categoria, aumento) {
    //Definimos la tabla de categorías de aumento
    const TABLA_DESCUENTO = {"A": 0.15,"B": 0.30,"C": 0.10,"D": 0.20}, SALARIO_ACTUALIZADO = salario * TABLA_DESCUENTO[categoria];
        //Retornamos los datos del empleado y el aumento salarial
        return "Empleado: "+nombre+", Salario: "+salario+", Categoría: "+ categoria +", Aumento: "+SALARIO_ACTUALIZADO.toFixed(2);
}

/* EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo */

function compararNumeros(num1, num2) {
    return num1 > num2 ? num1 : num2;
    }    

/* EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario. */

function descuentoCarro(carro) {
    const DESCUENTOS_APLICADOS = {"FORD FIESTA": 0.05, "FORD FOCUS": 0.10, "FORD ESCAPE": 0.20}, DESCUENTO = DESCUENTOS_APLICADOS[carro.toUpperCase()] || 0;
    return "Carro: " + carro + ", Descuento: " + (DESCUENTO * 100) + "%";
}

//Aquí construimos una funcion para mostrar en html
function mostrarDescuento() {
    const CARRO = document.getElementById("carro").value; // Obtener valor del input
    const RESULTADO = descuentoCarro(CARRO); // Calcular el descuento
    document.getElementById("resultado").innerText = RESULTADO; // Mostrar resultado en el elemento con id "resultado"
}


/* EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%. */

function descuentoViaje(origen, destino) {    
    const DESCUENTOS = {"LA COSTA DEL SOL": 0.05,"PANCHIMALCO": 0.10,"PUERTO EL TRIUNFO": 0.15 }, descuento = DESCUENTOS[destino.toUpperCase()] || 0;
    return "Origen: " + origen + ", Destino: " + destino + ", Descuento: " + (descuento * 100) + "%";
}

/* EJERCICIO 7: Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares. */

function aritmeticaValores(valores) {
    let negativos = 0, positivos = 0, multiplosQuince = 0, sumaPares = 0;

    //Aquí uso forEach para recorrer uno a uno los valores y segun la condición los incremento
    valores.forEach(function(valor) {        
        if (valor < 0) negativos++;
        if (valor > 0) positivos++;
        if (valor % 15 === 0) multiplosQuince++;
        if (valor % 2 === 0) sumaPares += valor;
    });

    return {negativos: negativos,positivos: positivos,multiplosQuince: multiplosQuince,sumaPares: sumaPares};
}

/* EJERCICIO 8: Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario.*/
function tablaMultiplicar(numero) {
    let tabla = "";
    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }
    return tabla;
}

/* EJERCICIO 9: Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida” */

function celsiusFahrenheit(celsius) {
    /*Definimos la conversion de ceslsius a farenheit de la siguiente manera: Para convertir de Celsius a Fahrenheit, multiplica la temperatura en Celsius por 9/5 y luego suma 32. Esto ajusta la escala y desplaza el punto de congelación para coincidir con Fahrenheit.*/
    let fahrenheit = (celsius * 9/5) + 32, resultado = "";
    if (fahrenheit >= 14 && fahrenheit <= 32) resultado = "Temperatura baja";
    else if (fahrenheit >= 32 && fahrenheit <= 68) resultado = "Temperatura adecuada";
    else if (fahrenheit >= 68 && fahrenheit <= 96) resultado = "Temperatura alta";
    else resultado = "Temperatura desconocida";
    return `Temperatura en Fahrenheit: ${fahrenheit} ${resultado}`
}

/* EJERCICIO 10: Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web.
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor. */

// Función para calcular el promedio de una lista de edades
function calcularPromedio(edades) {
    let suma = 0;
    for (let i = 0; i < edades.length; i++) {
        suma += edades[i];  // Suma de todas las edades
    }
    return suma / edades.length;  // Dividir por la cantidad de estudiantes para obtener el promedio
}

// Función para calcular y comparar los promedios de tres turnos de estudiantes
function calcularPromedioEdades(edadesManana, edadesTarde, edadesNoche) {
    const PROMEDIO_MANANA = calcularPromedio(edadesManana), PROMEDIO_TARDE = calcularPromedio(edadesTarde), PROMEDIO_NOCHE = calcularPromedio(edadesNoche);
    
    // Determinar cuál turno tiene el mayor promedio
    let turnoMayorPromedio = "mañana", maxPromedio = PROMEDIO_MANANA;

    if (PROMEDIO_TARDE > maxPromedio) {
        turnoMayorPromedio = "tarde";
        maxPromedio = PROMEDIO_TARDE;
    }

    if (PROMEDIO_NOCHE > maxPromedio) {
        turnoMayorPromedio = "noche";
    }

    return "El turno con mayor promedio de edades es el turno de " + turnoMayorPromedio + ".";
}

// Ejemplo de uso
console.log(validarEdad(20)); 
console.log(determinarNotaFinal("Rafael Arévalo", "AA-1544-2024", 80, 90, 100, 85));
console.log(calcularAumento('Rafael Arévalo',2450.00,"B"))
console.log(compararNumeros(7,7))
console.log(descuentoCarro('FORD FIESTA'));
console.log(descuentoViaje('Palma', 'PUERTO EL TRIUNFO'));
const valores = [13, 0, 145, 8, 300, -34, 1, -60, -15, 65];
console.log(aritmeticaValores(valores));
console.log(tablaMultiplicar(5));
console.log(celsiusFahrenheit(12));
const EDADES_MANANA = [18, 20, 22, 19, 21];
const EDADES_TARDE = [25, 26, 27, 28, 30, 32];
const EDADES_NOCHE = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
console.log(calcularPromedioEdades(EDADES_MANANA, EDADES_TARDE, EDADES_NOCHE));


//1.
//Ejercicio 2
//Decalaramos a y b
let a = 5;
let b = 10;

//Declaramos c que es la suma de a y b
let c = a + b;

//Ejercicio 3
// Imprimir el resultado en la consola
console.log("La suma de a y b es:", c);

// Pedir el nombre al usuario
let nombre = prompt("Por favor, ingresa tu nombre:");

// Imprimir un saludo en la consola
console.log("¡Hola, " + nombre + "! Bienvenido/a.");

//2.
//Ejercicio 1

{
  // Declaración de variables
  let a = 15;
  let b = 10;

  // Declaración de la variable para el mayor
  let c;

  // Comparar los valores de a y b
  if (a > b) {
    c = a;
    console.log("El número mayor es: " + c);
} else if (b > a) {
    c = b;
    console.log("El número mayor es: " + c);
} else {
    console.log("Ambos números son iguales: " + a);
}

}

//Ejercicio 2
{
  //Declaramos el numero
  let numero = prompt("Por favor, ingresa tu numero:");
  if(numero % 2==0){
    console.log("El numero"+numero+ ", es par") //Verifica si es par
  } else{
    console.log("El numero" +numero+ ", es impar") // Si no es impar
  }
}

//3.
//Ejercicio 1
{
  let numero = 10; //Inicializamos el numero en 10
  while(numero>0){ //Uniciamos el bucle while y le restamos 1 en cada iteracion
    console.log(numero);
    numero--;
  }
}
//Ejercicio 2
{
  let numero;

do {
    // Pedir al usuario que ingrese un número mayor a 100
    numero = prompt("Por favor, ingresa un número mayor a 100:");

    // Convertir el valor ingresado a un número
    numero = Number(numero);

    // Mostrar el número ingresado en la consola
    console.log("Número ingresado: " + numero);
    
} while (numero <= 100);

console.log("¡Ingresaste un número mayor a 100!");

}

//4.
//Ejercicio 1
{
  // Definir la función esPar
function esPar(numero) {
  // Verificar si el número es par
  if (numero % 2 === 0) {
      return true;
  } else {
      return false;
  }
}

// Probar la función con diferentes números
console.log(esPar(4));
console.log(esPar(7));  
console.log(esPar(0));  
console.log(esPar(13)); 
console.log(esPar(20));
}

//EJercicio 2
{
  // Definir la función convertirCelsiusAFahrenheit
function convertirCelsiusAFahrenheit(celsius) {
  // Convertir a Fahrenheit utilizando la fórmula
  let fahrenheit = celsius * 1.8 + 32;
  
  // Mostrar el resultado en la consola
  console.log(celsius + "°C es igual a " + fahrenheit + "°F");
}

// Probar la función con diferentes valores
convertirCelsiusAFahrenheit(0);
convertirCelsiusAFahrenheit(25);  
convertirCelsiusAFahrenheit(100); 
}

//5.
//Ejercicio 1
{
  // Definir el objeto persona
let persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  cambiarCiudad: cambiarCiudad
  
};
// Método para cambiar la ciudad
  
function cambiarCiudad(nuevaCiudad) {
  this.ciudad = nuevaCiudad;
}
// Mostrar las propiedades originales
console.log("Propiedades originales:", persona);

// Usar el método para cambiar la ciudad
persona.cambiarCiudad("Barcelona");

// Mostrar las propiedades actualizadas
console.log("Propiedades actualizadas:", persona);
}

//Ejercicio 2
{
  // Definir el objeto libro
  let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    año: 1967,
    esAntiguo:esAntiguo
  };
  function esAntiguo() {
    let añoActual = new Date().getFullYear();
    if (añoActual - this.año > 10) {
        console.log("El libro '" + this.titulo + "' es antiguo.");
    } else {
        console.log("El libro '" + this.titulo + "' es reciente.");
   }
  }
  // Mostrar si el libro es antiguo o reciente
  libro.esAntiguo();
}

//6.
//Ejercicio 1
{
  // Declarar el array original con los números del 1 al 10
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // Declarar un nuevo array vacío para almacenar los resultados
  let multiplicados = [];
  // Bucle para multiplicar cada número por 2 y almacenarlo en el nuevo array
  for (let i = 0; i < numeros.length; i++) {
      multiplicados.push(numeros[i] * 2);
  }
  // Mostrar el array original y el nuevo array en la consola
  console.log("Array original:", numeros);
  console.log("Array multiplicado:", multiplicados);
}

//Ejercicio 2
{
  // Crear un array vacío llamado pares
  let pares = [];

  // Bucle for para agregar los primeros 10 números pares
  for (let i = 0; pares.length < 10; i++) {
      // Verificar si el número es par
      if (i % 2 === 0) {
         pares.push(i);
      }
  }

  // Imprimir el array pares en la consola
  console.log("Primeros 10 números pares:", pares);
}

//7.
//Ejercicio 1


// Función para cambiar el color de los párrafos a azul
function cambiarColor() {
  // Seleccionar todos los elementos <p>
  const parrafos = document.querySelectorAll('p');

  // Cambiar el color de cada párrafo a azul
  parrafos.forEach(p => {
      p.style.color = 'blue';
  });
}

// Asignar el evento click al botón
const boton = document.getElementById('cambiar-color-btn');
boton.addEventListener('click', cambiarColor);

//Ejercicio 2
// Seleccionar el formulario
const formulario = document.getElementById('miFormulario');

// Agregar un evento de submit al formulario
formulario.addEventListener('submit', function(event) {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();

    // Obtener el valor del campo de texto
    const valorTexto = document.getElementById('texto').value;

    // Mostrar una alerta con el valor ingresado
    alert('Valor ingresado: ' + valorTexto);
});


//8.
// Seleccionar la lista
const lista = document.getElementById('miLista');

// Obtener todos los elementos <li> dentro de la lista
const items = lista.getElementsByTagName('li');

// Iterar sobre los elementos <li>
for (let i = 0; i < items.length; i++) {
    // Agregar un evento click a cada <li>
    items[i].addEventListener('click', function() {
        // Mostrar el texto del <li> en la consola
        console.log('Texto del elemento:', this.innerText);
    });
}

//Ejercicio 2

// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Obtener referencias a los elementos
  const miCampo = document.getElementById('miCampo');
  const deshabilitarBtn = document.getElementById('deshabilitarBtn');
  const habilitarBtn = document.getElementById('habilitarBtn');

  // Añadir evento click para deshabilitar el campo de texto
  deshabilitarBtn.addEventListener('click', () => {
      miCampo.disabled = true; // Deshabilitar el input
  });

  // Añadir evento click para habilitar el campo de texto
  habilitarBtn.addEventListener('click', () => {
      miCampo.disabled = false; // Habilitar el input
  });
});

//9.
//Ejercicio 1
// script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('correoForm');
  const emailInput = document.getElementById('email');
  const correoGuardadoDiv = document.getElementById('correoGuardado');
  const eliminarCorreoBtn = document.getElementById('eliminarCorreo');

  // Función para mostrar el correo guardado
  function mostrarCorreo() {
      const correoGuardado = localStorage.getItem('correo');
      if (correoGuardado) {
          correoGuardadoDiv.textContent = `Correo guardado: ${correoGuardado}`;
          correoGuardadoDiv.classList.remove('hidden');
          eliminarCorreoBtn.classList.remove('hidden');
      }
  }

  // Mostrar correo al cargar la página
  mostrarCorreo();

  // Manejar el evento de envío del formulario
  form.addEventListener('submit', (e) => {
      e.preventDefault(); // Evitar que se recargue la página
      const email = emailInput.value;
      localStorage.setItem('correo', email); // Guardar el correo en localStorage
      mostrarCorreo(); // Mostrar el correo guardado
      emailInput.value = ''; // Limpiar el campo de entrada
  });

  // Manejar el evento de eliminar el correo
  eliminarCorreoBtn.addEventListener('click', () => {
      localStorage.removeItem('correo'); // Eliminar el correo de localStorage
      correoGuardadoDiv.textContent = ''; // Limpiar el texto mostrado
      correoGuardadoDiv.classList.add('hidden'); // Ocultar el div
      eliminarCorreoBtn.classList.add('hidden'); // Ocultar el botón
  });
});




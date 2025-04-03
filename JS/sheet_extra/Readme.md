EX01 Métodos de Arreglos Avanzados
a) Crea un arreglo de números y utiliza el método map para generar un nuevo arreglo con el cuadrado de cada número.
b) Utiliza filter para obtener solo los números pares de un arreglo.
c) Emplea reduce para calcular la suma de los elementos de un arreglo.

EX02 Clases y Objetos en ES6
a) Define una clase Persona que tenga propiedades como nombre, edad y profesión.
b) Agrega un método saludar que imprima un mensaje de saludo personalizado.
c) Crea dos instancias de la clase y muestra sus propiedades en la consola.

EX03 Funciones Flecha y Funciones de Orden Superior
a) Reescribe la función saludar (del sheet01) como función flecha.
b) Crea una función de orden superior que reciba otra función y un arreglo; la función interna deberá aplicarse a cada elemento del arreglo y retornar un nuevo arreglo con los resultados.

EX04 Asincronía con Callbacks y Promesas
a) Escribe una función que simule una tarea asíncrona (por ejemplo, usar setTimeout) y que reciba un callback para ejecutar al finalizar.
b) Reescribe la misma tarea utilizando una Promesa, y muestra cómo se manejan los casos de éxito y error con .then() y .catch().

EX05 Consumo de APIs con Fetch
a) Crea un script que haga una petición HTTP a una API pública (por ejemplo, la API de usuarios de JSONPlaceholder).
b) Muestra en la consola algunos datos de la respuesta.
c) Maneja posibles errores en la petición.

EX06 Manipulación del DOM Avanzada
a) Crea una página HTML con una lista vacía y un botón “Añadir ítem”.
b) Cada vez que se haga clic en el botón, se debe crear un nuevo elemento de lista (<li>) con un texto aleatorio (puedes usar un arreglo de frases) y agregarlo a la lista.
c) Permite que al hacer clic en un elemento de la lista, éste se elimine.

EX07 Uso de localStorage
a) Diseña un pequeño sistema que permita guardar en el localStorage una lista de tareas.
b) Cada vez que se añada una tarea, se debe actualizar el localStorage y mostrar la lista en la página.
c) Permite eliminar tareas tanto del DOM como del localStorage.

EX08 Validación de Formularios
a) Crea una página HTML con un formulario que incluya campos de nombre, correo electrónico y contraseña.
b) Escribe un script que valide:
 - Que ningún campo esté vacío.
 - Que el correo tenga un formato correcto.
 - Que la contraseña tenga al menos 6 caracteres.
c) Muestra mensajes de error en la página si alguna validación falla.

EX09 Manejo de Eventos Avanzados
a) Implementa un campo de búsqueda que realice una consulta a medida que el usuario escribe, pero que utilice "debounce" para evitar demasiadas peticiones.
b) Muestra los resultados (pueden ser datos ficticios) en un área debajo del campo.

EX10 Manipulación y Formato de Fechas
a) Crea una función que reciba una fecha en formato ISO y la convierta a un formato más legible (por ejemplo, "DD/MM/YYYY").
b) Escribe una función que calcule la diferencia en días entre dos fechas proporcionadas.
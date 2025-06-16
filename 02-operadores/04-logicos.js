// Operadores lógicos de JavaScript (AND, OR, NOT)

// AND en JS se hace así &&

let mayor = false;

let subscrito = true;


// console.log(true && true); // Con esto le decimos a JavaScritp que evalue ambos parametros.
// console.log(false && true); 

console.log( 'operador and', mayor && subscrito);

// AND en JS se hace así || con dos barras estrechas.

console.log( 'operador or', mayor || subscrito); // Esto devolverá true si uno de los dos es true
// ... osea que si mayor es false y subscrito es true, devolverá true
// ... de la única forma que OR devuelva false, es si ambos son false.

// NOT en JS se hace así ! pero antes de la variable.

console.log('operador not', !mayor) // Esto lo que hará es invertir el valor de mayor, principalmente es false, luego en consola se mostrará true.

let catalogoInfantil = !mayor
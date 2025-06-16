// Personajes de TV

let nombre ="Pedrito";
let anime ="Locos maximus";
let edad = 19;

let personaje = {
    nombre: "Pedrito",
    anime: "Locos maximus",
    edad: 19,

};

console.log(personaje); // Esto sirve para llamar toda la lista o propiedad completa.
console.log(personaje.anime); // Esto sirve para llamar una propiedad en concreto

personaje.edad = 16; // personaje.edad lo que haces es cambiar la edad anterior a una nueva. El punto es el que realiza el cambio.

delete personaje.anime; // Delete borra una propiedad en concreto, en este caso, anime.

console.log(personaje);
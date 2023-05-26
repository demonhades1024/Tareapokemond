//¡Les damos la bienvenida a este desafío!
//Cuando terminemos, ¡la página debería estar llena de Pokemons!

/* 1 - Este es un array que contiene objetos, cada objeto es un Pokemon.
Su primer tarea será agregar al menos 2 pokemones más (pueden cambiar todos si quieren)
Es posible copiar y pegar el último item y luego reemplazar los valores, 
¡Pero cuidado con la sintaxis! Recuerden que los ítems de un array estan separados por comas.
*/

let pokemons = [
  {
      nombre: 'Bulbasaur',
      tipo: 'Planta',
      img: 'https://jusrecondo.github.io/hosted-assets/bulbasaur.png'
  },
  {
      nombre: 'Pikachu',
      tipo: 'Eléctrico',
      img: 'https://jusrecondo.github.io/hosted-assets/pikachu.png'
  },
  {
      nombre: 'Togepi',
      tipo: 'Hada',
      img: 'https://jusrecondo.github.io/hosted-assets/togepi.png'
  },
  {
    nombre: 'Caterpie',
    tipo: 'Gusano',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png'
},
{
  nombre: 'Butterfree',
  tipo: 'Mariposa',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png'
},
{
  nombre: 'Weedle',
  tipo: 'Oruga',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png'
}
];

/* 2 - Esta función crearHTMLPokemon(pokemon) crea un el código HTML de un elemento <li> con los datos del Pokemon que reciba como parámetro. Aquí hay herramientas de JS que veremos en la Clase 10.
--> createElement('nombreElementoHtml') es un método del Documento HTML que crea un elemento HTML cualquiera.
--> appendChild(item) es un método que tienen los elementos HTML y permite "agregarles un elemento hijo".
Donde dice listItem.appendChild(nombrePokemon); Esto le agrega al <li> el <h3> con el nombre del Pokemon.
Su tarea:
Al mismo <li> debemos agregarle la imagen y el tipo de Pokemon. Para esto repitan esa última línea de código 2 veces más pero pasando como argumento al método appendChild() primero imagenPokemon y luego tipoPokemon
*/

//
function crearHTMLPokemon(pokemon) {
let nombrePokemon = document.createElement('h3');
nombrePokemon.innerText = pokemon.nombre;

let imagenPokemon = document.createElement('img');
imagenPokemon.src=pokemon.img;

let tipoPokemon = document.createElement('p');
tipoPokemon.innerText = pokemon.tipo;

let listItem = document.createElement('li');
listItem.appendChild(nombrePokemon);
listItem.appendChild(imagenPokemon);
listItem.appendChild(tipoPokemon);
//Escribir las líneas de código aquí una debajo de la otra


return listItem;
}

//Aquí estamos "seleccionado" al <ul> con id "pokemon-list" para luego poder trabajar con este elemento. No modificar.
const listaPokemons = document.querySelector('#pokemon-list');

/* 3 - Con este forEach() recorremos el array pokemons y a partir de cada elemento creamos un pokemon y lo insertamos en el HTML dentro del <ul>
Su tarea:
Dentro de la función, falta crear una variable llamada pokemonListItem y asignarle un nuevo pokemon llamando a la funcion crearHTMLPokemon(pokemon)
La última línea del código se ocupa de lo demás 😉
*/
pokemons.forEach((pokemon)=> {
//Escribir aquí la línea de código faltante
let pokemonListItem=crearHTMLPokemon(pokemon);//li
let fragmento= document.createDocumentFragment();
    fragmento.appendChild(pokemonListItem)
    listaPokemons.appendChild(fragmento);
});



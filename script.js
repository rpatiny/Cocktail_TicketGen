cocktails = [
  "Martini",
  "Manhattan",
  "Old Fashioned",
  "Margarita",
  "Daiquiri",
  "Negroni",
  "Sazerac",
  "Bellini",
  "Bloody Mary",
  "Sidecar",
  "Mai Tai",
  "Pina Colada",
  "Bourbon Sour",
  "Cosmopolitan",
  "Tom Collins",
  "French 75",
  "Whiskey Sour",
  "Gimlet",
  "Rob Roy",
  "Mint Julep",
  "Champagne Cocktail",
  "Negroni Sbagliato",
  "Vesper",
  "Blue Hawaiian",
  "Singapore Sling",
  "Long Island Iced Tea",
  "Mojito",
  "White Russian",
  "Zombie",
  "Bacardi Cocktail",
  "Brandy Alexander",
  "Irish Coffee",
  "Rusty Nail",
  "Screwdriver",
  "Sex on the Beach",
  "Sloe Gin Fizz",
  "Tequila Sunrise",
  "Vodka Martini",
  "Whiskey Smash",
  "Aviation",
  "Black Russian",
  "Bramble",
  "Clover Club",
  "Corpse Reviver #2",
  "French Martini",
  "Golden Dream",
  "Hemingway Daiquiri",
  "Jack Rose",
  "Knickerbocker",
  "Lemon Drop Martini",
  "Old Pal",
  "Ramos Gin Fizz",
  "Red Snapper",
  "Rusty Nail",
  "Sazerac",
  "Scorpion",
  "Seabreeze",
  "Silver Fizz",
  "Singapore Sling",
  "Smoky Martini",
  "Southside",
  "Stinger",
  "Stone Sour",
  "Tuxedo",
  "Vesper Martini",
  "Ward Eight",
  "White Lady",
  "Whiskey Rickey",
  "Yellow Bird",
  "Zombie",
  "Zombie Punch",
];

const contador = document.querySelector("#contador");
const hora = document.querySelector("#hora");
const pessoas = document.querySelector("#pessoas");
const drinks = document.querySelector("#drinks");
const botao = document.querySelector("#botao");
const currentDate = new Date();

// Inicia o contador de ticket em 1, adiciona um escutador ao botão(pega o id) e gera uma função de
// adicionar
let counter = 0;
botao.addEventListener("click", function () {
  counter++;
  // Gera a quantidade de pessoas aleatórias
  let qtdPessoas = Math.floor(Math.random() * 10) + 1;
  pessoas.innerHTML = `Guests: ${qtdPessoas}`;

  // Remove todos os elementos filhos do elemento drinks, para evitar a duplicação de elementos
  while (drinks.firstChild) {
    drinks.removeChild(drinks.firstChild);
  }

  // Cria um elemento "p" para cada pessoa gerada aleatoriamente
  for (let i = 0; i < qtdPessoas; i++) {
    let drink = document.createElement("p");
    drink.innerHTML = cocktails[Math.floor(Math.random() * cocktails.length)];
    drinks.appendChild(drink);
  }

  hora.innerHTML = `Printed at: ${
    currentDate.getHours() + ":" + currentDate.getMinutes()
  }`;
  contador.innerHTML = `Ticket Number ${counter}`;
});

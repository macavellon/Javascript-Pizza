const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];




const Form = document.getElementById("form");
const Container = document.getElementById("container");
const Error = document.getElementById("error");
const inputNumber = document.getElementById("input-number");


// asi traigo del local storage las pizzas que tengo



const pizzas2 = JSON.parse(localStorage.getItem('pizzas2')) || [];

const ultimaPizza = pizzas2[pizzas2.length -1] 

// funcion que muestra la ultima pizza cargada
const ultimaPizzaCarga = () => {
  Container.innerHTML = `
  <div id="pizzacard">
  <h2 id="nombrepizza">${ultimaPizza.nombre}</h2>
  <p id="preciopizza">Precio: $${ultimaPizza.precio}</p>
  <img src=" ${ultimaPizza.imagen} " id="imagenpizza"/>
  </div>`

}

// aca guardo la pizza que se ingreso




const saveToLocalStorage = () => {
  localStorage.setItem('pizzas2', JSON.stringify(pizzas2));
};

// Para buscar la pizza, la funcion searchPizza debe dispararse cuando
// haya un evento, ese es el submit. Con la funcion inicializadora
//Ejecutando la funcion searchPizza
const init = ()=> { 
  Form.addEventListener("submit", searchPizza)
  ultimaPizzaCarga()
  ;

}
// esta funcion busca la pizza, en base al valor que tenga es
// lo que devolvemos
const searchPizza = (e) => {
  e.preventDefault()
// primero tenemos que validar el campo ( errores)
  if (inputNumber.value == "") {
  Container.innerHTML=""
  Error.textContent="Por favor ingrese un número de id pizza"
  inputNumber.classList.add('error-estilo')
  return 
  }
  

  // aca traemos al valor de la pizza.

  const pizza = pizzas.find((pizza)=> pizza.id == inputNumber.value)
  

  // aca decimos si no hay pizza, que devuelva error

    if (!pizza) {
      Container.innerHTML=""
      Error.textContent="Por favor ingrese un numero de id pizza válido"
      inputNumber.classList.add('error-estilo')
      return
      }


  // aca decimos, si la pizza tiene algun valor, referenciamos
  // al contenedor y le agregamos el codigo

  if (pizza) {
    pizzas2.push({
      nombre: pizza.nombre,
      precio: pizza.precio,
      imagen: pizza.imagen,
  })
  saveToLocalStorage(pizzas2)


  Container.innerHTML = `
  <div id="pizzacard">
  <h2 id="nombrepizza">${pizza.nombre}</h2>
  <p id="preciopizza">Precio: $${pizza.precio}</p>
  <img src=" ${pizza.imagen} " id="imagenpizza"/>
  </div>`
  Error.textContent=""

  }
}
  




init()
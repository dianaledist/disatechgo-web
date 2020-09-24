function login() {
    const nombre =document.querySelector('#inputname').value;
    const edad =document.querySelector('#inputedad').value;

    if (!nombre) {
        alert("debe ingresar un nombre!")
    } else if (edad<0 || edad>99) {
        alert("Ingrese edad correcta")
    } else {
        localStorage.setItem(nombre,edad);
        const bienvenida2=document.querySelector("h2");
        bienvenida2.textContent= `Hola ${nombre}, tienes ${edad}`;  
    }

    console.log("Hola");
    console.log(nombre);
    console.log(edad);
}

const servicios = [
    {
        imagen:"../images/web.png",
        tipo:"Diseño web con plantillas",
        precio:200,
        id:"1",
    },
    {
        imagen:"../images/web.png",
        tipo:"Diseño web personalizado",
        precio:300,
        id:"2",
    },
    {
        imagen:"../images/web.png",
        tipo:"Programación y funcionalidades",
        precio: 500,
        id:"3",
    },
    {
        imagen:"../images/web.png",
        tipo:"Logo",
        precio:100,
        id:"4",
    },
    {
        imagen:"../images/web.png",
        tipo:"Diseño editorial",
        precio:300,
        id:"5",
    },
    {
        imagen:"../images/web.png",
        tipo:"Community Manager",
        precio:100,
        id:"6",
    },
    {
        imagen:"../images/web.png",
        tipo:"Diseño e-mail marketing",
        precio:300,
        id:"7",
    },
    {
        imagen:"../images/web.png",
        tipo:"SEO orgánico para potenciar el sitio",
        precio: 500,
        id:"8",
    },
];




console.log(servicios);

const carrito=document.querySelector('#carrito');
const contenedorCarrito=document.querySelector('#lista-carrito tbody');
const vaciarCarritobtn=document.querySelector('#vaciar-carrito');

const divServicios = document.querySelector("#grilla_servicios");
console.log(divServicios);

const listaCursos=document.querySelector('#lista-cursos');

let articulosCarrito=[];


cargarEventListeners ();
function cargarEventListeners(){
    divServicios.addEventListener('click',agregarCarrito);
}

function agregarCarrito(e){

    if(e.target.classList.contains('agregar-servicio')){
        const servicioSeleccionado=e.target.parentElement.parentElement;
/*      console.log(servicioSeleccionado);

        console.log(e.target.parentElement.parentElement);
        console.log('Agregando al carrito...') */

        leerDatosServicio(servicioSeleccionado);
    }    
}

function leerDatosServicio(servicio) {
    const infoServicio={
        titulo:servicio.querySelector('.card-title').textContent,
        precio:servicio.querySelector('.card-text').textContent,
        cantidad:1,
    }
    articulosCarrito=[...articulosCarrito, infoServicio];


    carritoHTML();
}

function carritoHTML(){

    limpiarHTML();

    articulosCarrito.forEach( servicio => {
 /*        console.log(servicio); */
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
        ${servicio.titulo}
        </td>
        <td>
        ${servicio.precio}
        </td>
        <td>
        ${servicio.cantidad}
        </td>
        `;

        contenedorCarrito.appendChild(row);
    });
/*     console.log(articulosCarrito); */
}

function limpiarHTML() {
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}









armarCards();
function armarCards(){
    for (let j = 0; j<=servicios.length; j++) { 
        let cards=document.createElement('div');
        cards.classList.add("card");
        cards.style="width: 25rem";
      /*   console.log(cards); */
        cards.innerHTML= `<img class="card-img-top" src="${servicios[j].imagen}" alt="Card image cap${j+1}"><div class="card-body">
          <h5 class="card-title ">${servicios[j].tipo}</h5>
          <p class="card-text">${servicios[j].precio}</p>
          <a href="#" class="u-full-width button-primary button input agregar-servicio" data-id="1">Agregar Al Carrito</a>
        </div>`;
        divServicios.appendChild(cards);
    }
}

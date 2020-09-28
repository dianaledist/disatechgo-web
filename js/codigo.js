/* function login() {
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
} */


/* console.log(servicios); */

const carrito=document.querySelector('#carrito');
const contenedorCarrito=document.querySelector('#lista-carrito tbody');
const vaciarCarritobtn=document.querySelector('#vaciar-carrito');

const divServicios = document.querySelector("#grilla_servicios");

const variableCarrito=document.querySelector("#cantidadP");
const navCarrito=document.querySelector(".header_nav-shop");

const botonLogin=document.querySelector(".login-user")

/* console.log(navCarrito); */

/* console.log(divServicios); */

let articulosCarrito=[];


cargarEventListeners ();

function cargarEventListeners(){
    divServicios.addEventListener('click',agregarCarrito);
    contenedorCarrito.addEventListener('click',eliminarServicio);
    botonLogin.addEventListener('click',loginUser);

}

function loginUser(){
    const nombreUser=document.querySelector('#orangeForm-name').value;
const mailUser=document.querySelector('#orangeForm-email').value;
const passwordUser=document.querySelector('#orangeForm-pass').value;

console.log(nombreUser);
if (!nombreUser|| !mailUser || !passwordUser) {
    alert("Ingrese sus datos para una mejor experiencia :D")
} else {
    localStorage.setItem(nombreUser,mailUser);
    const bienvenida=document.createElement('div');
    bienvenida.classList.add('nombre-user');
    bienvenida.innerHTML= `Hola ${nombreUser}`;  
}
}

function agregarCarrito(e){

    if(e.target.classList.contains('agregar-servicio')){
        const servicioSeleccionado=e.target.parentElement.parentElement;
/*         console.log(servicioSeleccionado);
        console.log(e.target.parentElement.parentElement);
        console.log('Agregando al carrito...') */

        leerDatosServicio(servicioSeleccionado);
    }    
}

function leerDatosServicio(servicio) {
    const infoServicio={
        titulo:servicio.querySelector('.card-title').textContent,
        precio:servicio.querySelector('.card-text').textContent,
        id: servicio.querySelector('a').getAttribute('data-id'),
        cantidad:1,
    }

    const existe = articulosCarrito.some(servicio=> servicio.id===infoServicio.id);
/*     console.log(existe); */

    if(existe){
        const service =articulosCarrito.map(items=> {
            if(items.id===infoServicio.id)
            {
               items.cantidad++;
               return items;
              
            } else {
                return items;
            }
        });
        
        articulosCarrito=[...service];
    } else {
        articulosCarrito=[...articulosCarrito, infoServicio];
        const articulosStorage=JSON.stringify(articulosCarrito);

        localStorage.setItem('datos carrito', articulosStorage);
        console.log('objetoObtenido: ', JSON.parse(articulosStorage));
    }


carritoHTML();
}

function eliminarServicio(e){
    /*     console.log('eliminar'); */
        if(e.target.classList.contains('borrar-servicio')){
           const servicioId=e.target.getAttribute('data-id');
           articulosCarrito=articulosCarrito.filter(servicio=> servicio.id!==servicioId);
            
           carritoHTML();
    /*        console.log(articulosCarrito); */
        }
    }

function carritoHTML(){

    limpiarHTML();
    
    articulosCarrito.forEach( servicio => {
 /*        console.log(servicio); */

        const { titulo, precio, cantidad, id} = servicio

/*         localStorage.setItem(titulo, cantidad); */
        const row = document.createElement('tr');
        row.classList.add("tablas");
        row.innerHTML = `
        <td>
        <h6>${titulo}</h6>
        </td>
        <td>
        <h6>${precio}</h6>
        </td>
        <td>
        <h6>${cantidad}</h6>
        </td>
        <td>
        <a href="#" class="borrar-servicio" data-id="${id}">X 
        </td>
        `;

        contenedorCarrito.appendChild(row);
    });

    console.log(articulosCarrito);
}

function limpiarHTML() {
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}




//acceder a cada propiedad del objeto del array mediante map
const imagencard = servicios.map(function(laimagen) {
    return laimagen.imagen;
    });
const tipocard = servicios.map(function(laimagen) {
    return laimagen.tipo;
    });
const preciocard = servicios.map(function(laimagen) {
    return laimagen.precio;
    });
const idcard = servicios.map(function(laimagen) {
    return laimagen.id;
    });

armarCards();

function armarCards(){
    for (let j = 0; j<servicios.length; j++) { 
        let cards=document.createElement('div');
        cards.classList.add("card");
        cards.style="width: 25rem";
      /*   console.log(cards); */
        cards.innerHTML= `<img class="card-img-top" src="${imagencard[j]}" alt="Card image cap${j+1}"><div class="card-body">
          <h5 class="card-title">${tipocard[j]}</h5>
          <p class="card-text">${preciocard[j]}</p>
          <a href="#" class="u-full-width button-primary button input agregar-servicio" data-id="${idcard[j]}">Agregar Al Carrito</a>
        </div>`;
        divServicios.appendChild(cards);
    }
}


import { servicios } from './db.js';

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


const carrito=document.querySelector('#carrito');
const contenedorCarrito=document.querySelector('#lista-carrito tbody');
const vaciarCarritobtn=document.querySelector('#vaciar-carrito');

const divServicios = document.querySelector("#grilla_servicios");

const variableCarrito=document.querySelector("#cantidadP");
const navCarrito=document.querySelector(".header_nav-shop");

const botonLogin=document.querySelector(".login-user");

const valorTotal=document.querySelector(".muestra-total");
console.log(valorTotal);

/* console.log(navCarrito); */
/* console.log(divServicios); */

let articulosCarrito=[];


cargarEventListeners ();

function cargarEventListeners(){
    divServicios.addEventListener('click',agregarCarrito);
    contenedorCarrito.addEventListener('click',eliminarServicio);
    botonLogin.addEventListener('click',loginUser);
    vaciarCarritobtn.addEventListener('click',vaciarCarrito);
    document.addEventListener('DOMContentLoaded',()=>{
        articulosCarrito=JSON.parse(localStorage.getItem('datos carrito')) || [];
        carritoHTML();
        console.log(articulosCarrito);
    })
}

var nombre=document.querySelector(".nombre-user").value;
var welcome=document.querySelector(".home_bienvenida");
console.log(nombre);


function loginUser(){
    const nombreUser=document.querySelector('#orangeForm-name').value;
    const mailUser=document.querySelector('#orangeForm-email').value;
    const passwordUser=document.querySelector('#orangeForm-pass').value;

/* console.log(nombreUser); */
if (!nombreUser|| !mailUser || !passwordUser) {

    alert("Ingrese sus datos para una mejor experiencia :D");
      
} else {
    localStorage.setItem(nombreUser,mailUser);
    console.log(nombreUser);
    const bienvenida=document.createElement('div');
    bienvenida.classList.add('home_bienvenida');
    bienvenida.innerHTML= `<h2 class="home-text">Hola ${nombreUser}<h2> <br> <h3 class="home-text">Has ingresado a tu sección privada en <strong>disatechgo</strong>. Esperamos que disfrutes de esta experiencia digital! <br>
    Descubrí los servicios que tenemos para ofrecerte!</h3>`;  
    welcome.appendChild(bienvenida);

    $('.login-user').submit(function(e) {
        e.preventDefault();
        // Coding
        $('#modalRegisterFor').fadeout(2000);
        $('#modalRegisterFor').modal('toggle'); 
        return false;
    });
}
}



function agregarCarrito(e){

    if(e.target.classList.contains('agregar-servicio')){
        const servicioSeleccionado=e.target.parentElement.parentElement;
/*         console.log(servicioSeleccionado);
        console.log(e.target.parentElement.parentElement);
        console.log('Agregando al carrito...') */

        leerDatosServicio(servicioSeleccionado);

        calcularTotal();
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
    console.log(existe); 

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
        
    }

carritoHTML();
}

function eliminarServicio(e){
    /*     console.log('eliminar'); */
        if(e.target.classList.contains('borrar-servicio')){
           const servicioId=e.target.getAttribute('data-id');
           articulosCarrito=articulosCarrito.filter(servicio=> servicio.id!==servicioId);
           console.log(articulosCarrito);

           sincronizarStorage();
           carritoHTML();
    /*        console.log(articulosCarrito); */
            calcularTotal();
        }
    }

function vaciarCarrito(e){
    /*    console.log('hola');
        console.log(articulosCarrito); */
        contenedorCarrito.innerHTML = '';
        articulosCarrito.length=0;
        console.log(articulosCarrito);   
        localStorage.clear()  
        calcularTotal();      
        carritoHTML();
    }


function carritoHTML(){

    limpiarHTML();
    
    let arraySubtotal=[];
    let total=0;

    articulosCarrito.forEach( servicio => {
        /* console.log(servicio); */

        const {titulo, precio, cantidad, id} = servicio

        const sumaTotal=precio*cantidad;
        arraySubtotal=[...arraySubtotal,sumaTotal]
        /* console.log(sumaTotal); */

   /*      console.log(subtotal); */
/*         console.log(total); */

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

        sincronizarStorage();

    });
    console.log(arraySubtotal);
    const precioFinal=(arraySubtotal === undefined || arraySubtotal.length == 0) ? 0 : (arraySubtotal.reduce(function(a, b){ return a + b; }));
    console.log(precioFinal)

    
        const row2=document.createElement('tr');
        row2.classList.add('muestra-total');
        row2.innerHTML= `<th colspan="4" class="p-3"><div><h5>Precio final: <span class="precio-final">${precioFinal}</span></h5></div></th>`;
        contenedorCarrito.appendChild(row2);
   
}



function limpiarHTML() {
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

function sincronizarStorage() {
    const articulosStorage=JSON.stringify(articulosCarrito);

    localStorage.setItem('datos carrito', articulosStorage);
    console.log('Carrito actualizado: ', JSON.parse(articulosStorage));
}

function calcularTotal() {

}


///////// jQUERY Animations

$(document).ready(function() 
{
     $(function() {
        $('#button-animate').click(function(){
            
            $("#carrito").fadeToggle(); 
        });
    });
   

    $(".agregar-servicio").click(function() {
        doBounce($(this),1, '5px',100);   
    });
    
    $("#vaciar-carrito").click(function() {
        doBounce($(this),1, '5px',100);   
    });

  
    function doBounce(element, times, distance, speed) {
        for(let i = 0; i < times; i++) {
            element.animate({marginTop: '-='+distance},speed)
                .animate({marginTop: '+='+distance},speed);
        }        
    }
  
    /* var precio2=$(".precio-final").text();

    $(".precio-html").html("<h5>Tu servicio cuesta: "+precio2+"<h5>");
 
    console.log(precio2); */
});





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


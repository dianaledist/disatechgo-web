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

const serviciosWeb = [
    {
        tipo:"Diseño web con plantillas",
        precio:200,
    },
    {
        tipo:"Diseño web personalizado",
        precio:300,
    },
    {
        tipo:"Programación y funcionalidades",
        precio: 500,
    },
    {
        tipo:"Logo",
        precio:100,
    },
    {
        tipo:"Diseño editorial",
        precio:300,
    },
    {
        tipo:"Community Manager",
        precio:100,
    },
    {
        tipo:"Diseño e-mail marketing",
        precio:300,
    },
    {
        tipo:"SEO orgánico para potenciar el sitio",
        precio: 500,
    },
];




console.log(serviciosWeb);
/* console.log(serviciosBranding);
console.log(serviciosBranding[1].tipo2);
console.log(serviciosComunicacion);
 */
/* var divServicios = document.querySelector(".container.home_pricing-web");
var divServiciosBranding = document.querySelector(".container-fluid.home_pricing-branding.col-10");
var agregando=document.querySelector(".infoPresupuesto");
 */
const carrito=document.querySelector('#carrito');
const contenedorCarrito=document.querySelector('#lista-carrito tbody');
const vaciarCarritobtn=document.querySelector('#vaciar-carrito');
const listaCursos=document.querySelector('#lista-cursos');

let articulosCarrito=[];



/* console.log(divServicios);
console.log(typeof serviciosWeb);
console.log(divServiciosBranding);
console.log(typeof serviciosBranding);


serviciosWeb.forEach ((servicio) => {                
    for (let i = 0; i<=serviciosWeb.length; i++)  {
    let contenedorDescripcionWeb=document.createElement('div');
    contenedorDescripcionWeb.classList.add(".container.home_pricing-web");
    contenedorDescripcionWeb.innerHTML=`<div class="home_pricing-opciones d-flex flex-wrap justify-content-center p-2">
    <div class="home_pricing-opciones-titulo col-8"><h3>${serviciosWeb[i].tipo}</h3></div>
    <div class="home_pricing-opciones-precio col-4d-lg-block"><span><h3>${serviciosWeb[i].precio}</h3></span></div>
    <a href="#" class="u-full-width btn-primary btn input agregar-carrito" data-id="${i}"><h5>Agregar Al Carrito</h5></a></div>`;

    divServicios.appendChild(contenedorDescripcionWeb);
    cargarEventListeners();
    }
}); */


cargarEventListeners ();
function cargarEventListeners(){
    listaCursos.addEventListener('click',agregarCarrito);
}

function agregarCarrito(e){

    if(e.target.classList.contains('agregar-carrito')){
        const servicioSeleccionado=e.target.parentElement.parentElement;
/*         console.log(cursoSeleccionado);

        console.log(e.target.parentElement.parentElement);
        console.log('Agregando al carrito...') */

        leerDatosServicio(servicioSeleccionado);
    }    
}

function leerDatosServicio(servicio) {
/*     console.log(curso); */

    const infoServicio={
        titulo:servicio.querySelector('h4').textContent,
        precio:servicio.querySelector('.precio span').textContent,
        id: servicio.querySelector('a').getAttribute('data-id'),
        cantidad:1,
    }
/*     console.log(infoCurso); */
    articulosCarrito=[...articulosCarrito, infoServicio];


    carritoHTML();
}

function carritoHTML(){

    limpiarHTML();

    articulosCarrito.forEach( servicio => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
        ${servicio.titulo}
        </td>
        `;

        contenedorCarrito.appendChild(row);
    });
    console.log(articulosCarrito);
}

function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';


    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}





/* serviciosBranding.forEach (servicio2 => {                
    for (let j = 0; j<=serviciosBranding.length; j++)  {
    let contenedorDescripcionBranding=document.createElement('div');
    contenedorDescripcionBranding.classList.add(".container-fluid.home_pricing-branding.col-10");
    contenedorDescripcionBranding.innerHTML=`<div class="home_pricing-opciones d-flex flex-wrap justify-content-center">
    <div class="home_pricing-opciones-titulo col-6"><h3>${serviciosBranding[j].tipo2}</h3></div>
    <div class="home_pricing-opciones-precio col-2d-lg-block "><h3>${serviciosBranding[j].precio2}</h3></div>
    <div class="home_pricing-opciones-checkbox col-2"><input type="checkbox" class="form-check-input" id="checkPrecio" onclick="seleccionador()"></div>
    </div>`;
    divServiciosBranding.appendChild(contenedorDescripcionBranding);
    }
    }); */

/* function Agregar () {
    serviciosWeb.forEach (servicio => {   
    for (let j = 0; j<=serviciosWeb.length; j++)  {
    let agregaSingle=document.createElement('div');
    agregaSingle.classList.add("infoPresupuesto");
    agregando.innerHTML=`<h3>${serviciosWeb[0].tipo} cuesta: ${serviciosWeb[0].precio}</h3>`;
    agregando.appendChild(agregaSingle);
    }
    });
} */

/* function Servicios(tipo,precio)
{
    this.tipo=tipo;
    this.precio=precio
}

var servicio1=new Servicios ("Diseño web con plantillas",200);
var servicio2=new Servicios ("Diseño web personalizado",300);
var servicio3=new Servicios ("Programación y funcionalidades",500);


const presupuesto=[servicio1,servicio2,servicio3];
console.log(presupuesto);

const suma=servicio1.precio+servicio2.precio+servicio3.precio;


function Calcular () {
    console.log(`El precio total es de $ ${suma}`);
    servicio4=new Servicios("Landing Page",400);
    presupuesto.push(servicio4);
    console.log(presupuesto);

    suma2=(suma+servicio4.precio);

    console.log(`El nuevo precio total es de ${suma2}`);
} */





/* contenedorDescripcion.classList.add(".home_pricing-opciones-titulo.col-6");
let descripcionServicio =document.createElement('h3'); 
descripcionServicio.textContent=`${tipo}`;       
contenedorDescripcion.appendChild(descripcionServicio);

let contenedorPrecio=document.createElement('div');
contenedorPrecio.classList.add(".home_pricing-opciones-precio.col-2.d-none.d-md-none.d-lg-block");
let precioServicio=document.createElement('h3');
contenedorPrecio.appendChild(precioServicio);

let contenedorCheck=document.createElement('div');
contenedorCheck.classList.add(".home_pricing-opciones-checkbox.col-2");
let botonServicio=document.createElement('checkbox');
botonServicio.classList.add(".form-check-input");
contenedorCheck.appendChild(botonServicio);

let contenedorOpciones=document.createElement('div');
contenedorOpciones.classList.add(".home_pricing-opciones.d-flex.flex-wrap.justify-content-center");
contenedorOpciones.appendChild(contenedorDescripcion);
contenedorOpciones.appendChild(contenedorPrecio);
contenedorOpciones.appendChild(contenedorCheck); */

/*   let contenedorGlobal=document.createElement('div');
contenedorGlobal.classList.add(".container-fluid.home_pricing.col-10");
contenedorGlobal.appendChild(contenedorOpciones);

console.log(contenedorGlobal); */

/* var divServicios = document.querySelector(".container-fluid.home_pricing.col-10");
divServicios.insertBefore(contenedorOpciones, divServicios.children[0]); */
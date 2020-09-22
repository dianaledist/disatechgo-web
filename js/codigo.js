/* const nombre =document.querySelector("div.indexlogin input[name='inputname']"); */



function login() {
    const nombre =document.querySelector('#inputname').value;
    const edad =document.querySelector('#inputedad').value;


    if (!nombre) {
        alert("debe ingresar un nombre!")
    } else if (edad<0 || edad>99) {
        alert("Ingrese edad correcta")
    } else {
        localStorage.setItem(nombre,edad);
    }

    console.log("Hola");
    console.log(nombre);
    console.log(edad);

/*     var bienvenida = document.createElement("h2");                 // Create a <p> element
    bienvenida.innerHTML = `Hola ${nombre}, tienes ${edad}`;                // Insert text
    document.querySelector('.bienvenida').appendChild(bienvenida);   */

    const bienvenida2=document.querySelector("h2");
    bienvenida2.textContent= `Hola ${nombre}, tienes ${edad}`;  
    

}


/* const nombre =prompt ("Ingrese su nombre");
const edad =prompt ("Ingrese su edad");

if (!nombre) {
    alert("debe ingresar un nombre!")
} else if (edad<0 || edad>99) {
    alert("Ingrese edad correcta")
} else {
    alert(`Hola ${nombre}, tienes ${edad} años!`)
    localStorage.setItem(nombre,edad);
}

var nombre1 = localStorage.getItem(nombre);
localStorage.removeItem('');

console.log(nombre1); */


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
];

console.log(serviciosWeb);
const [{tipo,precio}]=serviciosWeb;


var divServicios = document.querySelector(".container-fluid.home_pricing.col-10");
console.log(divServicios);

function listadoServicios () {
    serviciosWeb.forEach ((servicio) => {
                
    for (let i = 0; i<=serviciosWeb.length; i++)  {
    let contenedorDescripcion=document.createElement('div');
    contenedorDescripcion.classList.add(".container-fluid.home_pricing.col-10");
    contenedorDescripcion.innerHTML=`<div class="home_pricing-opciones d-flex flex-wrap justify-content-center">
    <div class="home_pricing-opciones-titulo col-6"><h3>${serviciosWeb[i].tipo}</h3></div>
    <div class="home_pricing-opciones-precio col-2 d-none d-md-none d-lg-block "><h3>${serviciosWeb[i].precio}</h3></div>
    <div class="home_pricing-opciones-checkbox col-2"><input type="checkbox" class="form-check-input" id="exampleCheck1"></div>
    </div>`;
    divServicios.appendChild(contenedorDescripcion);
    }


       

     


    })
};



listadoServicios();

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
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

    const bienvenida2=document.querySelector("h2");
    bienvenida2.textContent= `Hola ${nombre}, tienes ${edad}`;  
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
];

const serviciosBranding = [
    {
        tipo:"Logo",
        precio:50,
    },
    {
        tipo:"Diseño editorial",
        precio:300,
    },
    {
        tipo:"Community Manager",
        precio: 500,
    },
];

console.log(serviciosWeb);
console.log(serviciosBranding);
console.log(serviciosBranding[1].tipo);

var divServicios = document.querySelector(".container-fluid.home_pricing-web.col-10");
var divServiciosBranding = document.querySelector(".container-fluid.home_pricing-branding.col-10");


console.log(divServicios);
console.log(divServiciosBranding);

function listadoServicios () {
    serviciosWeb.forEach (servicio => {                
    for (let i = 0; i<=serviciosWeb.length; i++)  {
    let contenedorDescripcionWeb=document.createElement('div');
    contenedorDescripcionWeb.classList.add(".container-fluid.home_pricing-web.col-10");
    contenedorDescripcionWeb.innerHTML=`<div class="home_pricing-opciones d-flex flex-wrap justify-content-center">
    <div class="home_pricing-opciones-titulo col-6"><h3>${serviciosWeb[i].tipo}</h3></div>
    <div class="home_pricing-opciones-precio col-2d-lg-block "><h3>${serviciosWeb[i].precio}</h3></div>
    <div class="home_pricing-opciones-checkbox col-2"><input type="checkbox"  class="form-check-input" id="checkPrecio" onclick="seleccionador()"></div>
    </div>`;
    divServicios.appendChild(contenedorDescripcionWeb);
    }
    });
};

  // Get the checkbox
  var checkBox = document.querySelector("#checkPrecio");
  // Get the output text
  var text = document.querySelector("text");

function seleccionador() {
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

function listadoServicios2 () {
    serviciosBranding.forEach (servicio => {                
    for (let i = 0; i<=serviciosBranding.length; i++)  {
    let contenedorDescripcionBranding=document.createElement('div');
    contenedorDescripcionBranding.classList.add(".container-fluid.home_pricing-branding.col-10");
    contenedorDescripcionBranding.innerHTML=`<div class="home_pricing-opciones d-flex flex-wrap justify-content-center">
    <div class="home_pricing-opciones-titulo col-6"><h3>${serviciosBranding[i].tipo}</h3></div>
    <div class="home_pricing-opciones-precio col-2 d-none d-md-none d-lg-block "><h3>${serviciosBranding[i].precio}</h3></div>
    <div class="home_pricing-opciones-checkbox col-2"><input type="checkbox" class="form-check-input" id="exampleCheck1" onclick="seleccionador()"></div>
    </div>`;
    divServiciosBranding.appendChild(contenedorDescripcionBranding);
    }
    });
};


listadoServicios();
listadoServicios2();


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
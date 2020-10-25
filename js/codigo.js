//// Declaración de variables

const carrito=document.querySelector('#carrito');
const carritoClass=document.querySelector('.carrito-completo');

const contenedorCarrito=document.querySelector('#lista-carrito tbody');
const botonCompra=document.querySelector('.boton-compra')
const vaciarCarritobtn=document.querySelector('#vaciar-carrito');
const btnVolver=document.querySelector('#button-return');

const divServicios = document.querySelector("#grilla_servicios");

const variableCarrito=document.querySelector("#cantidadP");
const navCarrito=document.querySelector(".header_nav-shop");

const botonLogin=document.querySelector(".login-user");

const valorTotal=document.querySelector(".muestra-total");
const reconstruirBtn=document.querySelector(".button-reconstruccion");

console.log(valorTotal);

/* console.log(navCarrito); */
/* console.log(divServicios); */


//// Array carrito inicial
let articulosCarrito=[];


//// Funcion cargar eventos
cargarEventListeners ();

function cargarEventListeners(){
    divServicios.addEventListener('click',agregarCarrito);
    contenedorCarrito.addEventListener('click',eliminarServicio);
    botonCompra.addEventListener('click',realizarCompra)
    botonLogin.addEventListener('click',loginUser);
    vaciarCarritobtn.addEventListener('click',vaciarCarrito);
    
    document.addEventListener('DOMContentLoaded',()=>{
        articulosCarrito=JSON.parse(localStorage.getItem('datos carrito')) || [];
        carritoHTML();
        console.log(articulosCarrito);
    })
}


//// Pantalla login
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
    bienvenida.innerHTML= `<h3 class="home-text text-right">Hola ${nombreUser}!<h3>`;  
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


//// Funcion agregar carrito, al hacer click en boton agregar-servicio
function agregarCarrito(e){
    
    if(e.target.classList.contains('agregar-servicio')){
        const servicioSeleccionado=e.target.parentElement.parentElement;
/*         console.log(servicioSeleccionado);
        console.log(e.target.parentElement.parentElement);
        console.log('Agregando al carrito...') */

        leerDatosServicio(servicioSeleccionado);   
    }    
}


//// Lectura de datos del servicio seleccionado y activacion de funcion para crear contenido carrito
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


//// Funcion eliminar servicio en el carrito
function eliminarServicio(e){
    /*     console.log('eliminar'); */
        if(e.target.classList.contains('borrar-servicio')){
           const servicioId=e.target.getAttribute('data-id');
           articulosCarrito=articulosCarrito.filter(servicio=> servicio.id!==servicioId);
           console.log(articulosCarrito);

           sincronizarStorage();
           carritoHTML();
    /*        console.log(articulosCarrito); */
        }
}

//// Funcion para vaciar el carrito, borrar localStorage, activacion de funcion para crear contenido carrito
function vaciarCarrito(e){
    /*    console.log('hola');
        console.log(articulosCarrito); */
        contenedorCarrito.innerHTML = '';
        articulosCarrito.length=0;
        console.log(articulosCarrito);   
        localStorage.clear();      
        carritoHTML();
    }


/// Funcion para crear contenido nuevo de servicio seleccionado en el submenu
function carritoHTML(){

    limpiarHTML();
    
    let arraySubtotal=[];

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
        <h6>€ ${precio}</h6>
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

    const precioFinal=calcPrecioFinal(arraySubtotal);
    console.log(precioFinal)

    localStorage.setItem('precio-final', precioFinal);
    
        const row2=document.createElement('tr');
        row2.classList.add('muestra-total');
        row2.innerHTML= `<th colspan="4" class="p-3"><div><h5>Precio final: € <span class="precio-final">${precioFinal}</span></h5></div></th>`;
        contenedorCarrito.appendChild(row2);   
}

function calcPrecioFinal(precios) {
    if (precios === undefined || precios.length == 0) {
        return 0;
    } else {
        return precios.reduce(function(a, b){ return a + b; });
    }
}

/* const precioFinal=(arraySubtotal === undefined || arraySubtotal.length == 0) ? 0 : (arraySubtotal.reduce(function(a, b){ return a + b; })); */

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


///////// jQUERY Animations y AJAX

$(document).ready(function() 
{
    $.ajax({
        url: 'bbdd.json',
        dataType: "json",
        success: function(data) {
            data.forEach(element => {            
                /* $('.precio-html.text-center').append(`<p>Servicio: ${element.tipo} - Precio: ${element.precio}<p>`) */
                $('#grilla_servicios').append(`            
                    <div class="card" style="width: 25rem">
                        <img class="card-img-top" src="${element.imagen}" alt="Card image"><div class="card-body">
                        <h5 class="card-title">${element.tipo}</h5>
                        <p class="text-right">€<span class="card-text">${element.precio}</span></p>
                        <a class="u-full-width button-primary button input agregar-servicio" id="button-bounce" data-id="${element.id}">Agregar Al Carrito</a>
                    </div>`)          
            });

           

            $(".agregar-servicio").click(function() {
                doBounce($(this),1, '5px',100); 
                
                if ( 0 < $('.card').length ) {
                    $('.agregar-servicio').click(function() {
                        var offset = $(this).parent().offset();
                        $(this).parent().clone().addClass('card-clone').css({
                            'left' : offset.left + 'px',
                            'top' : parseInt(offset.top-$(window).scrollTop()) + 'px',
                            'width' :  $(this).parent().width() + 'px',
                            'height' : $(this).parent().height() + 'px'
                            
                        }).appendTo($('#grilla_servicios').parent());
                                           
                        /* $('#button-animate').delay(800).css("background-color", "blue"); */

                        /* $('#button-animate').toggle(function () {
                            $("#button-animate").css({
                                "background-color": "yellow",
                                "font-weight": "bolder"
                            },500)
                        }, function () {
                            $("#button-animate").css({
                                "background-color": "white",
                                "font-weight": "bolder"
                            },500)
                        }); */                  

                        var cart = $('#button-animate').offset();
                        $('.card-clone').animate( { top: parseInt(cart.top-$(window).scrollTop()) + 'px', left: cart.left + 'px', 'height': '0px', 'width': '0px' }, 800, function(){
                            $(this).remove();                           
                        });                        
                    });
                }   
            });
                
        },
        error: function (jqXHR, status, error) {
            console.log("error")
            console.log(jqXHR)
            console.log(`Error => Status: ${status} - Error: ${error}`)
        }
    });

    $(function() {
        $('#button-animate').click(function(){
            
            $("#carrito").fadeToggle(); 
        });
        $(".contenedor").click(function(e){
            $("#carrito").hide(e);
        });
    });

    function doBounce(element, times, distance, speed) {
        for(let i = 0; i < times; i++) {
            element.animate({marginTop: '-='+distance},speed)
                .animate({marginTop: '+='+distance},speed);
        }        
    }
    
    $("#vaciar-carrito").click(function() {
        doBounce($(this),1, '5px',100);   
    });
    
});


/* var bbddJSON = JSON.stringify(servicios);
console.log(bbddJSON)
 */


function realizarCompra(){
    $('#carrito').html('<div class="box-carrito"><div class="formulario"><h3 class="text-center p-3">Ingrese sus datos</h3><p><input type="text" class="input_form u-full-width form_name" placeholder="Nombre completo"></p><p><input type="text" class="input_form u-full-width form_card" placeholder="XXXX-XXXX-XXXX-XXXX"></p><p><input type="text" class="input_form u-full-width" placeholder="Dirección"></p><p><input type="text" class="input_form u-full-width" placeholder="E-mail"></p><p><input type="text" class="input_form u-full-width" placeholder="Pedido especial"></p><a class="button u-full-width boton-compra" onclick="procesarPago()"> Finalizar pago<a class="button u-full-width button-return" onclick="recargarCarrito()">Volver</div></div>');

}



function recargarCarrito(){
    const nombreUser=$('.form_name').val();
    const form_card=$('.form_card').val();
if (!nombreUser || !form_card ) {

    alert("Ingrese sus datos para una mejor experiencia :D");
      
} else {
    console.log("Hola");
    /* $('.carrito-completo').html('<div id="carrito" class="box-carrito"><table id="lista-carrito" class="u-full-width"><thead><tr><th><h5>Nombre</h5></th><th><h5>Precio</h5></th><th><h5>Cantidad</h5></th><th></th></tr><th colspan="4"><hr></th></thead><tbody></tbody></table><div class="muestra-total"></div><a href="#" class="button u-full-width boton-compra">Realizar compra</a><a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a></div>')   
    carritoHTML(); */
}}

function procesarPago(){
    const storageAlmacenado=JSON.parse(localStorage.getItem('datos carrito'));
    const precioFinalAlmacenado=JSON.parse(localStorage.getItem('precio-final'));
    console.log(storageAlmacenado);
    console.log(precioFinalAlmacenado);
    

    const nombreUser=$('.form_name').val();
    const form_card=$('.form_card').val();
if (!nombreUser || !form_card ) {

    alert("Ingrese sus datos para una mejor experiencia :D");
      
} else {
    const precioFinalPantalla0=document.createElement('div');
    precioFinalPantalla0.classList.add('box-carrito');
    precioFinalPantalla0.innerHTML= `
    <h3 class="text-center p-3">Has contratado los servicios con éxito</h3>`;
    carrito.appendChild(precioFinalPantalla0);

    storageAlmacenado.forEach( item => {
        /* console.log(servicio); */
        limpiarHTML();
        const {titulo, precio, cantidad} = item
        
        console.log(titulo)
        console.log(precio)
        console.log(cantidad)
                        
        formulario=document.querySelector('.formulario');
        formulario.classList.add('formulario_hidden');

        const listaProducto=document.createElement('div');
        listaProducto.classList.add('box-carrito');
     /*    document.querySelector('.final-screen').style.visibility = 'block'; */
        listaProducto.innerHTML= `<div class="box-carrito"><div class="final-screen"><p>Servicio: ${titulo} Precio: ${precio} Cantidad ${cantidad}</p></div></div>`;  
        carrito.appendChild(listaProducto);
    });

    const precioFinalPantalla=document.createElement('div');
    precioFinalPantalla.classList.add('box-carrito');
    precioFinalPantalla.innerHTML= `<h3 class="text-center p-3">Precio total: €${precioFinalAlmacenado}</h3><a class="button u-full-width button-reconstruccion"> Aceptar`;
    carrito.appendChild(precioFinalPantalla);
}

    
       
}

/* function recargarCarrito(){
    

    carritoClass.innerHTML = '';
    carritoHTML();


        const carritoInit=document.createElement('div');
        carritoInit.classList.add('carrito-completo');
        carritoInit.innerHTML= `<div id="carrito" class="box-carrito"><table id="lista-carrito" class="u-full-width"><thead><tr><th><h5>Nombre</h5></th><th><h5>Precio</h5></th><th><h5>Cantidad</h5></th><th></th></tr><th colspan="4"><hr></th></thead><tbody></tbody></table><div class="muestra-total"></div><a href="#" class="button u-full-width boton-compra">Realizar compra</a><a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a></div>`;
    formulario=document.querySelector('.formulario');
    formulario.classList.add('formulario_hidden');
        carrito.appendChild(carritoInit);
   
} */

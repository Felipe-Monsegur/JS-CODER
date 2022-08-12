function Producto (nombre, precio, stock){
    this.nombre=nombre
    this.precio=precio
    this.stock=stock
}
const ProductoA = new Producto ("Samsung Galaxy",900,10)
const ProductoB = new Producto ("Motorola",700,15)
const ProductoC = new Producto ("Iphone 13 max",1100,5)
const ProductoD = new Producto ("Iphone 13",1000,10)
const ProductoE = new Producto ("Iphone 12",900,10)
const ProductoF = new Producto ("Iphone 10",600,10)
let listaProductodos = [ProductoD, ProductoE, ProductoF]
let InfoProductodos = []
function listasProductodos(){
    for (const producto of listaProductodos){
        InfoProductodos.push (producto.nombre)
        InfoProductodos.push (producto.precio)
        InfoProductodos.push (producto.stock)
    }
}
listasProductodos()
let listaProducto= [ProductoA, ProductoB, ProductoC]
let InfoProducto = []
function listasProducto (){
    for (const producto of listaProducto){
        InfoProducto.push (producto.nombre)
        InfoProducto.push (producto.precio)
        InfoProducto.push (producto.stock)
    }
}    
listasProducto()
let addButton=document.getElementById("add-button")
addButton.addEventListener("click", separeteCategories)
function separeteCategories(e){
    e.preventDefault()
    let itemnumber=entryEdad.value
    divideCategories(itemnumber)
}
let entryEdad=document.getElementById("todo-entry-box")
function divideCategories(itemnumber){
    if (itemnumber>=18){
    for (const producto of listaProducto){
        let card=document.createElement("div")
        card.innerHTML=
                        `<div class="container principal pt-2 mb-3">
                        <h4> Modelo: ${producto.nombre}</h4>
                        <p>  Precio:$ ${producto.precio}</p>
                        <p> Unidades restantes: ${producto.stock}</p>
                        </div>`
                        document.body.appendChild(card)
    }
} else if(itemnumber<18){
            let card=document.createElement("div")
            card.innerHTML=
                            
                            `<div class="container principal pt-2 mb-3">
                            <h4>Sos menor de edad no podes comprar</h4>
                            </div>`
                            document.body.appendChild(card)
}
}
let saveButton=document.getElementById("save-button")
saveButton.addEventListener("click",saveThis)
function saveThis(){
    sessionStorage.setItem("edadUsuario",JSON.stringify(itemnumber))
    let valor=sessionStorage.getItem("edadUsuario")
}

let descuento=document.getElementById("descuento")
grandescuento.addEventListener("click",descuentoProducto)
function descuentoProducto (){
                    if (itemnumber>25){
                        let promocion=document.createElement("div")
                        promocion.innerHTML=
                        `<div class="container principal pt-2 mb-3">
                            <h2>Obtubo un descuento de 5%</h2>
                            </div>`
                        document.body.appendChild(promocion)
                    }else if (itemnumber>45){
                        let promocion=document.createElement("div")
                        promocion.innerHTML=
                        `<div class="container principal pt-2 mb-3">
                            <h2>Obtubo un descuento de 10%</h2>
                            </div>`
                        document.body.appendChild(promocion)
                    }
}

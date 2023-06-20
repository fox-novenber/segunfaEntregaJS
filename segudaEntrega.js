// estoc de la verduleria
/* 
const verduleria = [
    {id:1 , producto:"manzana",   precio:150 ,origen:"nacional"  },
    {id:2 , producto:"naranja",   precio:100 ,origen:"nacional"  },
    {id:3 , producto:"banana",    precio:200 ,origen:"importado" },
    {id:4 , producto:"peras",     precio:80  ,origen:"nacional"  },
    {id:5 , producto:"frutillas", precio:350 ,origen:"importado" },
    {id:6 , producto:"tomates",   precio:85  ,origen:"nacional"  }
]

// opcion de filtrar por producto, precio de menor a mayor y por orien y a todo sumarle iva

let opcion = parseInt(prompt("BIEN VENIDO ELIJA UNA OPCION:\n 0 - para salir \n 1- para comprar \n 2-para ingresar objeto al stoc"))



if (opcion == 1) {
  let mensaje = "Productos disponibles:\n";
  for (let index = 0; index < verduleria.length; index++) {
    let frutas = verduleria[index];
    mensaje += `Producto: ${frutas.producto}\n`;
    mensaje += "--------------------\n";
  }
  alert(mensaje);} */


  const verduleria = [
    {id: 1, producto: "manzana", precio: 150, origen: "nacional"},
    {id: 2, producto: "naranja", precio: 100, origen: "nacional"},
    {id: 3, producto: "banana", precio: 200, origen: "importado"},
    {id: 4, producto: "peras", precio: 80, origen: "nacional"},
    {id: 5, producto: "frutillas", precio: 350, origen: "importado"},
    {id: 6, producto: "tomates", precio: 85, origen: "nacional"}
  ];
  
  function buscarPorProducto(producto) {
    const resultados = verduleria.filter(fruta => fruta.producto.toLowerCase() === producto.toLowerCase());
    return resultados;
  }
  
  function buscarPorPrecio() {
    const resultados = verduleria.slice().sort((a, b) => a.precio - b.precio);
    return resultados;
  }
  
  function buscarPorOrigen(origen) {
    const resultados = verduleria.filter(fruta => fruta.origen.toLowerCase() === origen.toLowerCase());
    return resultados;
  }
  
  let opcion = parseInt(prompt("BIENVENIDO\nElige una opción:\n 0 - Salir\n 1 - Buscar por producto\n 2 - Buscar por precio\n 3 - Buscar por origen"));
  
  if (opcion === 1) {
    let productoBuscado = prompt("eliga un producto:\n banana\n manzana\n naranja\n peras\n frutillas\n tomates");
    let resultados = buscarPorProducto(productoBuscado);
    if (resultados.length > 0) {
      console.log("Resultados de la búsqueda:");
      for (let i = 0; i < resultados.length; i++) {
        let fruta = resultados[i];
        let mensaje=""
        mensaje += `Producto: ${fruta.producto}\n`;
        mensaje += `Precio: ${fruta.precio}\n`;
        mensaje += `Origen: ${fruta.origen}\n`;
        alert(mensaje)
      }
    } else {
      console.log("No se encontraron resultados para el producto buscado.");
    }
  } else if (opcion === 2) {
    let resultados = buscarPorPrecio();
    console.log("Productos ordenados por precio de menor a mayor:");
    for (let i = 0; i < resultados.length; i++) {
      let fruta = resultados[i];
      console.log(fruta);
    }
  } else if (opcion === 3) {
    let origenBuscado = prompt("Ingrese el origen a buscar:\n nacional\n importado");
    let resultados = buscarPorOrigen(origenBuscado);
    if (resultados.length > 0) {
      console.log("Resultados de la búsqueda:");
      for (let i = 0; i < resultados.length; i++) {
        let fruta = resultados[i];
        console.log(fruta);
      }
    } else {
      console.log("No se encontraron resultados para el origen buscado.");
    }
  }
  
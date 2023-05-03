/*Funcion auxiliar para buscar un producto en la lista */
function buscar_producto(lista_productos, nombre_producto_a_buscar) {
  var posicion_objeto = -1;
  lista_productos.find((elemento, indice) => {
    if (elemento.nombre == nombre_producto_a_buscar) {
      posicion_objeto = indice;
    }
  });
  if (posicion_objeto == -1) {
    alert(`Ese producto no existe`);
  }
  return posicion_objeto;
}

/*FUNCION PARA CREAR LOS OBJETOS QUE VAN EN LA LISTA DE PRODUCTOS */
function crear_producto(lista_productos) {
  var nuevo_producto = {
    nombre: null,
    precio: 0,
  };

  var nombre_producto = prompt(`Escriba el nombre del producto a agregar`);
  var precio_producto = Number(prompt(`Escriba el precio de ese producto`));
  nuevo_producto.nombre = nombre_producto;
  nuevo_producto.precio = precio_producto;
  lista_productos.push(nuevo_producto);
}

/*FUNCION PARA ELIMINAR UN OBJETO DE LA LISTA DE PRODUCTOS */
function borrar_producto(lista_productos) {
  var nombre_producto_a_borrar = prompt(
    `Escriba el nombre del producto a borrar`
  );
  var posicion_obtenida = buscar_producto(
    lista_productos,
    nombre_producto_a_borrar
  );

  if (posicion_obtenida == -1) {
    return;
  }

  lista_productos.splice(posicion_obtenida, 1);
  alert(`El producto ${nombre_producto_a_borrar} se borró exitosamente`);
}

/*MODIFICO LOS DATOS DE UN OBJETO DE LA LISTA PRODUCTO */
function modificar_producto(lista_prdouctos) {
  var nombre_producto_a_modificar = prompt(
    `Escriba el nombre del producto a modificar`
  );

  var posicion_obtenida = buscar_producto(
    lista_prdouctos,
    nombre_producto_a_modificar
  );

  if (posicion_obtenida == -1) {
    return;
  }
  var que_modificar = 0;
  while (que_modificar != 4) {
    que_modificar = Number(
      prompt(`*Nombre producto ${lista_productos[posicion_obtenida].nombre}
*Precio producto ${lista_productos[posicion_obtenida].precio}
        Que quiere modificar?
              1. Nombre
              2. Precio
              3. Ambos
              4. nada
              `)
    );

    switch (que_modificar) {
      case 1:
        lista_prdouctos[posicion_obtenida].nombre = prompt(
          `Ingrese el nuevo nombre`
        );
        break;
      case 2:
        lista_prdouctos[posicion_obtenida].precio = prompt(
          `Ingrese el nuevo precio`
        );
        break;
      case 3:
        lista_prdouctos[posicion_obtenida].nombre = prompt(
          `Ingrese el nuevo nombre`
        );
        lista_prdouctos[posicion_obtenida].precio = prompt(
          `Ingrese el nuevo precio`
        );
        break;
      case 4:
        return;
    }
  }
}

/*Funcion auxiliar de mostrar */
function ordenar_por_precio(lista, sentido) {
  var nueva_lista_ordenada = lista.slice();
  nueva_lista_ordenada.sort((a, b) => {
    if (a.precio < b.precio) {
      return -1;
    }
    if (a.precio > b.precio) {
      return 1;
    }
    return 0;
  });
  if (sentido == "menor_a_mayor") {
    return nueva_lista_ordenada;
  }
  return nueva_lista_ordenada.reverse();
}

/*Muestra el contenido de una lista en un alert en el orden especificado */
function mostrar_productos(lista_productos, orden) {
  var lista_iterar = ordenar_por_precio(lista_productos, orden);

  var super_string = "";
  lista_iterar.forEach((element) => {
    super_string = super_string + `${element.nombre} ` + `${element.precio} \n`;
  });
  alert(super_string);
}

/*Funcion auxiliar para filtrar por precio maximo */
function filtrar_precio_maximo(lista, precio_maximo) {
  var nueva_lista_filtrada = lista.filter((p) => p.precio <= precio_maximo);
  console.log(nueva_lista_filtrada);
  return nueva_lista_filtrada;
}

/*Funcion auxiliar para filtrar por precio minimo */
function filtrar_precio_minimo(lista, precio_minimo) {
  var nueva_lista_filtrada = lista.filter((p) => p.precio >= precio_minimo);
  console.log(nueva_lista_filtrada);
  return nueva_lista_filtrada;
}

/*FUNCION PRINCIPAL PARA FILTRAR */
function filtrar_por_precio(lista_prdouctos) {
  var opcion_filtrar = 0;
  while (opcion_filtrar != 4) {
    opcion_filtrar = Number(
      prompt(`Opciones para filtrar: 
          1. Todos los productos mayores a X valor
          2. Todos los productos menores a X valor
          3. Todos los productos entre X e Y valor
          4. Volver atrás
          `)
    );

    let lista_filtrada_mayores_a_X;
    let lista_filtrada_menores_a_X;
    switch (opcion_filtrar) {
      case 1:
        var precio_minimo = prompt(`Ingrese el valor mínimo`);
        lista_filtrada_mayores_a_X = filtrar_precio_minimo(
          lista_prdouctos,
          precio_minimo
        );
        mostrar_productos(lista_filtrada_mayores_a_X, "menor_a_mayor");
        break;
      case 2:
        var precio_maximo = prompt(`Ingrese el valor máximo`);
        lista_filtrada_menores_a_X = filtrar_precio_maximo(
          lista_prdouctos,
          precio_maximo
        );
        mostrar_productos(lista_filtrada_menores_a_X, "menor_a_mayor");

        break;
      case 3:
        var precio_minimo = prompt(`Ingrese el valor mínimo`);
        lista_filtrada_mayores_a_X = filtrar_precio_minimo(
          lista_prdouctos,
          precio_minimo
        );
        var precio_maximo = prompt(`Ingrese el valor máximo`);
        lista_filtrada_menores_a_X = filtrar_precio_maximo(
          lista_filtrada_mayores_a_X,
          precio_maximo
        );
        mostrar_productos(lista_filtrada_menores_a_X, "menor_a_mayor");
        break;
    }
  }
}

/*INICIA PROGRAMA */
alert(`*** Bienvenido a este  Proyecto ***
      El mismo se basa en ingresar nombre de productos y sus precios
      correspondientes.
      A los mismos se los puede modificar, eliminar, ordenar por precio
      y filtrar
        `);

var lista_productos = [];
var opcion = 0;
while (opcion != 7) {
  opcion = Number(
    prompt(`Opciones: 
        1. Crear nuevo producto
        2. Borrar producto
        3. Modificar producto
        4. Ver Productos de menor a mayor precio
        5. Ver productos de mayor a menor precio
        6. Filtrar
        7. Salir de la maquina
        `)
  );

  switch (opcion) {
    case 1:
      crear_producto(lista_productos);
      break;

    case 2:
      borrar_producto(lista_productos);
      break;

    case 3:
      modificar_producto(lista_productos);
      break;
    case 4:
      mostrar_productos(lista_productos, "menor_a_mayor");
      break;
    case 5:
      mostrar_productos(lista_productos, "mayor_a_menor");
      break;

    case 6:
      filtrar_por_precio(lista_productos);
      break;
  }
}

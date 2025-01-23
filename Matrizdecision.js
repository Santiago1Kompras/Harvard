//Array para la solicitud
let solicitud = [];

// Capturar los valores de la solicitud
function solicitudCotizacion() {
    const numeroSolicitudGeneral = document.getElementById("solicitud-numero-general").value;
    const productoservicioEvaluado = document.getElementById("producto-servicio-evaluado").value;
    const presupuesto = document.getElementById("presupuesto-anual").value;
    const lugarEntrega = document.getElementById("lugar-entrega").value;
    const fechaEsperada = document.getElementById("fecha-esperada").value;

    console.log("Solicitud Numero: ", numeroSolicitudGeneral);
    console.log("Producto o servicio: ", productoservicioEvaluado);
    console.log("Presupesto anual: ", presupuesto);
    console.log("lugarEntrega: ", lugarEntrega);
    console.log("fecha Esperada: ", fechaEsperada);

    // Objeto para guardar las solicitudes
    nuevaSolicitud = {
        solicitud: numeroSolicitudGeneral,
        productoservicio: productoservicioEvaluado,
        presupuesto: presupuesto,
        lugarEntrega: lugarEntrega,
        fechaEsperada: fechaEsperada,
    };
    console.log("Datos solicitud", nuevaSolicitud);

    // Limpiar el formulario
    document.getElementById("formulario-solicitud").reset();
    
    // actualizar la tabla de propuesta
    solicitud.push(nuevaSolicitud)
    actualizarSolicitudes()
};

// funciona para actualizar la tabla de criticidad
function actualizarSolicitudes() {
    const tablaSolicitudes = document.getElementById("tabla-solicitudes"); //selecciona el cuerpo de la tabla "Solicitudes"
    tablaSolicitudes.innerHTML = ""; //limpia el contenido actual de la tabla

    //Recorremos el array de criticidad para generar filas
    solicitud.forEach((item, index) => {
        const fila = `
            <tr>
                <td>${index + 1}</td>
                <td>${item.solicitud}</td>
                <td>${item.productoservicio}</td>
                <td>${item.presupuesto}</td>
                <td>${item.lugarEntrega}</td>
                <td>${item.fechaEsperada}</td>
            </tr>
        `;
        tablaSolicitudes.innerHTML += fila; // Agrega la fila a la tabla
    });
};


//definir el array para los pesos
let ponderacion = [];

// Capturar los valores de los pesos de las variables e imprimirlos en la consola
function pesoCriterios() {
    const numeroSolicitudPonderacion = document.getElementById("solicitud-numero-ponderacion").value;
    const pesoComercial = Number(document.getElementById("comercial").value);
    const pesoTecnica = Number(document.getElementById("tecnica").value);
    const pesoTecnicaEspecifica = Number(document.getElementById("tecnica-especifica").value);
    const pesoProveedor = Number(document.getElementById("proveedor").value);

    const totalPesos = pesoComercial + pesoTecnica + pesoTecnicaEspecifica + pesoProveedor;

    console.log("Peso Comercial:", pesoComercial);
    console.log("Peso Tecnica:", pesoTecnica);
    console.log("Peso Tecnica Especifica:", pesoTecnicaEspecifica);
    console.log("Peso Proveedor:", pesoProveedor);

    // Verificar que los pesos sumen 100%
    if (totalPesos > 100 || totalPesos < 100) {
        console.log("Error, los pesos deben sumar 100%, están sumando:", totalPesos);
        
        let errorPesos = document.getElementById("suma-total-pesos");

        errorPesos.innerText="Error en el total debe sumar 100%"
        errorPesos.style.color="red";
    } else {
        console.log("Es posible evaluar, es:", totalPesos)
        document.getElementById("suma-total-pesos").innerText="Cumple el "+totalPesos+" %"
    }

    //Objeto para guardar las ponderaciones
    nuevaPonderacion = {
        solicitud: numeroSolicitudPonderacion,
        comercial: pesoComercial,
        tecnico: pesoTecnica,
        especifico: pesoTecnicaEspecifica,
        proveedor: pesoProveedor,
    };

    // Guardar la propuesta y actualizar la tabla
    ponderacion.push(nuevaPonderacion);
    actualizarPonderacion();

    console.log("pesos capturados:", ponderacion);
};

// Función para actualizar la tabla de la ponderación
function actualizarPonderacion() {
    const tablaPonderacion = document.getElementById("tabla-ponderacion")
    tablaPonderacion.innerHTML = "";

    //Recorremos el array de ponderacion para generar filas
    ponderacion.forEach((item, index) => {
    const fila = `
        <tr>
            <td>${index + 1}</td>
            <td>${item.solicitud}</td>
            <td>${item.comercial}</td>             
            <td>${item.tecnico}</td>
            <td>${item.especifico}</td>
            <td>${item.proveedor}</td>
        </tr>
    `;
    tablaPonderacion.innerHTML += fila; // Agrega la fila a la tabla
    });
};

// definir el array para la criticidad
let criticidad = [];

// capturar las los valores de variables de criticidad
function variablesCriticidad() {
    const numeroSolicitudCriticidad = document.getElementById("solicitud-numero-criticidad").value;
    const productoservicioEvaluado = document.getElementById("producto-servicio-evaluado").value;    
    const impactoFinanciero = document.getElementById("impacto-financiero").value;
    const riesgoPreciofinanciero = document.getElementById("precio-financiero").value;
    const poderNegociacion = document.getElementById("poder-negociacion").value;
    const impactoDesabastecimiento = document.getElementById("impacto-desabastecimiento").value;
    const riesgoLogistico = document.getElementById("riesgo-logistico").value;
    const complejidadTecnica = document.getElementById("complejidad-tecnica").value;
    const capacidadSustitucion = document.getElementById("capacidad-sustitucion").value;
    const innovacionCambios = document.getElementById("innovacion-cambios").value;
    const disponibilidadProveedores = document.getElementById("disponibilidad-proveedores").value;
    const capacidadProveedor = document.getElementById("capacidad-proveedores").value;
    const confiabilidadProveedores = document.getElementById("confiabilidad-proveedores").value;
    //Calcular la suma de criticidades
    const sumaCriticades = 
        (parseFloat(impactoFinanciero) || 0) + (parseFloat(riesgoPreciofinanciero) || 0) + (parseFloat(poderNegociacion) || 0) + (parseFloat(impactoDesabastecimiento) || 0) + (parseFloat(riesgoLogistico) || 0) + (parseFloat(complejidadTecnica) || 0) + (parseFloat(capacidadSustitucion) || 0) + (parseFloat(innovacionCambios) || 0) + (parseFloat(disponibilidadProveedores) || 0) + (parseFloat(capacidadProveedor) || 0) + (parseFloat(confiabilidadProveedores) || 0);
    //Array para todas las criticidades
    const valoresCriticidad = [
        impactoFinanciero, riesgoPreciofinanciero, poderNegociacion, impactoDesabastecimiento, riesgoLogistico, complejidadTecnica, capacidadSustitucion, innovacionCambios, disponibilidadProveedores, capacidadProveedor, confiabilidadProveedores
    ]
    // Filtrar valores validos, convertir a valores y calcular promedio
    const criticidadesValidas = valoresCriticidad
        .map(v => parseFloat(v)) //Convertir a numeros
        .filter(v => !isNaN(v) && v > 0); //Excluir valores invalidos y negativos 0
    
    // promedio de las criticidades validas
    const promedioCriticidades = criticidadesValidas.length > 0
        ? criticidadesValidas.reduce((sum, val) => sum + val, 0) / criticidadesValidas.length
        : 0;

    console.log("Impacto financiero:", impactoFinanciero);
    console.log("Precio financiero:", riesgoPreciofinanciero);
    console.log("Poder negociacion:", poderNegociacion);
    console.log("Impacto desabastecimiento:", impactoDesabastecimiento);
    console.log("Riesgo logistico:", riesgoLogistico);
    console.log("Complejidad tecnica:", complejidadTecnica);
    console.log("Capacidad sustitucion:", capacidadSustitucion);
    console.log("Innovacion cambios:", innovacionCambios);    
    console.log("Disponibilidad proveedores:", disponibilidadProveedores);
    console.log("Capacidad proveedores:", capacidadProveedor);
    console.log("Confiabilidad proveedores:", confiabilidadProveedores);
    console.log("La suma de la criticada es: ", sumaCriticades);
    console.log("El promedio de las criticidades es: ", promedioCriticidades);
    
    // Objeto para guardar la criticidad
    nuevaCriticidad = {
        solicitud: numeroSolicitudCriticidad,
        productoservicio: productoservicioEvaluado,
        impactofinanciero: impactoFinanciero,
        riesgoPreciofinanciero: riesgoPreciofinanciero,
        poderNegociacion: poderNegociacion,
        impactoDesabastecimiento: impactoDesabastecimiento,
        riesgoLogistico: riesgoLogistico,
        complejidadtecnica: complejidadTecnica,
        capacidadSustitucion: capacidadSustitucion,
        innovacionCambios: innovacionCambios,
        disponibilidadProveedores: disponibilidadProveedores,
        capacidadProveedor: capacidadProveedor,
        confiabilidadProveedores: confiabilidadProveedores,
    };
    // Guardar la propuesta y actualizar la tabla
    criticidad.push(nuevaCriticidad);
    actualizarCriticidad();
    
    // mostrar en la consola la nueva criticidad y todas las criticidades
    console.log("Criticidad agregada:", nuevaCriticidad);
    console.log("Todas las criticidades:", criticidad);
        
    // Limpiar el formulario
    document.getElementById("formulario-criticidad").reset();
};

// funciona para actualizar la tabla de criticidad
function actualizarCriticidad() {
    const tablaCriticidad = document.getElementById("tabla-criticidad"); //selecciona el cuerpo de la tabla "Criticidad"
    tablaCriticidad.innerHTML = ""; //limpia el contenido actual de la tabla

    //Recorremos el array de criticidad para generar filas
    criticidad.forEach((item, index) => {
        const fila = `
            <tr>
                <td>${index + 1}</td>
                <td>${item.solicitud}</td>
                <td>${item.productoservicio}</td>
                <td>${item.impactofinanciero}</td>             
                <td>${item.riesgoPreciofinanciero}</td>
                <td>${item.poderNegociacion}</td>
                <td>${item.impactoDesabastecimiento}</td>
                <td>${item.riesgoLogistico}</td>
                <td>${item.complejidadtecnica}</td>
                <td>${item.capacidadSustitucion}</td>
                <td>${item.innovacionCambios}</td>
                <td>${item.disponibilidadProveedores}</td>
                <td>${item.capacidadProveedor}</td>
                <td>${item.confiabilidadProveedores}</td>               
            </tr>
        `;
        tablaCriticidad.innerHTML += fila; // Agrega la fila a la tabla
    });
};

// función generica #1 para convertir los resultados de las respuestas en valores cuantitativos
function obtenerCalificacion(generico) {
    switch (generico) {
        case "Excelente":
            return 100;
        case "Bueno":
            return 75;
        case "Normal":
            return 50;
        case "Regular":
            return 25;
        case "Malo":
            return 0;
    }
}

//Funcion generica #2 para convertir los resultados de las respuestas en valores cuantitativos
function obtenerCalificacion2(generico2) {
    if (generico2 === "Mucha") return 100;
    else if (generico2 === "Alguna") return 50;
    else if (generico2 === "Ninguna") return 0;
}

// Funcion generica # 3 para convertir los resultados de las respuestas en valores cuantitativos
function obtenerCalificacion3(generico3) {
    switch (generico3) {
        case "Cumple":
            return 100;
        case "Ajustar":
            return 40;
        case "No cumple":
            return 0;
    }
}




// Array general para almacenar propuestas
let propuesta = []; 

// capturar los datos de calificar propuesta
function calificarPropuesta() {
    const numeroSolicitudCalificacion = document.getElementById("solicitud-numero-calificacion").value;
    const nombreProveedor = document.getElementById("nombre-Proveedor").value;
    const productoservicioEvaluado = document.getElementById("producto-servicio-evaluado").value;
    const fechaCalificacion = document.getElementById("fecha-calificación").value;
    const cantidadOfrecida = document.getElementById("cantidad-ofrecida").value;
    const precioUnitario = document.getElementById("precio-unitario").value;
    const impuestos = document.getElementById("impuestos").value;
    const valorTotal = document.getElementById("valor-total").value;
    const valorFletes = document.getElementById("valor-fletes").value;
    const valorTotalformula = 
        parseFloat(precioUnitario) * parseFloat(1 + parseFloat(impuestos)/100) * parseFloat(cantidadOfrecida) + parseFloat(valorFletes);
    const vigenciaPrecio = document.getElementById("vigencia-precio").value;
    const tiempoEntrega = document.getElementById("tiempo-entrega").value;
    const lugarEntrega = document.getElementById("lugar-entrega-propuesto").value;
    const formaPago = document.getElementById("forma-pago").value;
    const descripcionProductoservicio = document.getElementById("descripcion-producto-servicio").value;
    const calidad = document.getElementById("calidad").value;
    const justificacionCalidad = document.getElementById("justificacion-calidad").value;
    const marca = document.getElementById("marca").value;
    const justificacionMarca = document.getElementById("justificacion-marca").value;
    const garantia = document.getElementById("garantia").value;
    const justificacionGarantia = document.getElementById("justificacion-garantia").value;
    const capacidadFinanciera = document.getElementById("capacidad-financiera").value;
    const capacidadOperativa = document.getElementById("capacidad-operativa").value;
    const sostenibilidad = document.getElementById("sostenibilidad").value;
    const experiencia = document.getElementById("experiencia").value;
    const legalidad = document.getElementById("legalidad").value;
        
    console.log("Nuero Solcitud:", numeroSolicitudCalificacion);
    console.log("Nombre Proveedor:", nombreProveedor);
    console.log("Producto o Servicio:", productoservicioEvaluado);
    console.log("Fecha Calificación:", fechaCalificacion);
    console.log("Cantidad Ofredida:", cantidadOfrecida);
    console.log("Precio Unitario:", precioUnitario);
    console.log("Impuestos:", impuestos);
    console.log("Valor Total:", valorTotal);
    console.log("Valor Fletes:", valorFletes);
    console.log("valor total formulado: ", valorTotalformula);
    console.log("Vigencia Precio:", vigenciaPrecio);
    console.log("Tiempo Entrega:", tiempoEntrega);
    console.log("Lugar Entrega:", lugarEntrega);
    console.log("Forma de pago:", formaPago);
    console.log("Descripción Producto o Servicio:", descripcionProductoservicio);
    console.log("Calidad:", calidad);
    console.log("Justificación calidad:", justificacionCalidad);
    console.log("Marca:", marca);
    console.log("Justificacion marca:", justificacionMarca);
    console.log("Garantía:", garantia);
    console.log("Justificacion garantía:", justificacionGarantia);
    console.log("Capacidad Financiera:", capacidadFinanciera);
    console.log("Capacidad Operativa:", capacidadOperativa);
    console.log("Sostenibilidad:", sostenibilidad);
    console.log("Experiencia:", experiencia);
    console.log("Conformidad Legal:", legalidad);
    
    // valida que los campos obligatorios se diligencien
    if (!nombreProveedor || !precioUnitario) {
        alert("completar la información mínima requerida");
        return;
    }
           
    // Aqui aprovechamos la función general de obtener calificación y simplificamos el codigo
    let calificacionCalidad = obtenerCalificacion(calidad)
    console.log("calificacion calidad es: ", calificacionCalidad)

    let calificacionMarca = obtenerCalificacion(marca)
    console.log("Calificacion marca es:", calificacionMarca)

    let calificacionGarantia = obtenerCalificacion(garantia)
    console.log("Calificacion garantia es:", calificacionGarantia)
    
    let calificacionCapacidadFinanciera = obtenerCalificacion(capacidadFinanciera);
    console.log("calificacion Capacidad financiera es:" , calificacionCapacidadFinanciera)

    let calificacionCapacidadOperativa = obtenerCalificacion(capacidadOperativa);
    console.log("calificación capacidad operativa es:", calificacionCapacidadOperativa)

    let calificacionSostenibilidad = obtenerCalificacion(sostenibilidad)
    console.log("calificación sostenibilidad es:", calificacionSostenibilidad)

    let calificacionExperiencia = obtenerCalificacion2(experiencia)
    console.log("calificación experiencia:", calificacionExperiencia)

    let calificacionLegalidad = obtenerCalificacion3(legalidad)
    console.log("conformidad legal es: ", calificacionLegalidad)

    // Objeto para guardar las propuestas
    const nuevaPropuesta = {
        solicitud: numeroSolicitudCalificacion,
        productoservicio: productoservicioEvaluado,
        proveedor: nombreProveedor,
        fechacalificacion: fechaCalificacion,
        cantidadofrecida: cantidadOfrecida,
        preciounitario: precioUnitario,
        impuestos: impuestos,
        valortotal: valorTotal,
        valorFletes: valorFletes,
        vigencia: vigenciaPrecio,
        tiempoentrega: tiempoEntrega,
        lugarentrega: lugarEntrega,
        formadepago: formaPago,
        descripcionproductoservicio: descripcionProductoservicio,
        calidad: calificacionCalidad,
        marca: calificacionMarca,
        garantia: calificacionGarantia,
        capacidadfinanciera: calificacionCapacidadFinanciera,
        capacidadoperativa:calificacionCapacidadOperativa,
        sostenibilidad: calificacionSostenibilidad,
        experiencia: calificacionExperiencia,
        legalidad: calificacionLegalidad,
    };

    // Guardar la propuesta y actualizar la tabla
    propuesta.push(nuevaPropuesta);
    actualizarPropuesta();
    
    // mostrar en la consola la nueva propuesta y todas las propeustas
    console.log("Propuesta agregada:", nuevaPropuesta);
    console.log("Todas las propuestas:", propuesta);
        
    // Limpiar el formulario
    document.getElementById("formulario-calificar-propuesta").reset();

    ordenarPorPrecio();
};

// funciona para guardar las propuestas en la tabla
function actualizarPropuesta() {
    const tablaPropuestas = document.getElementById("tabla-calificar-propuesta"); //selecciona el cuerpo de la tabla "Formulario calificar propuesta"
    tablaPropuestas.innerHTML = ""; //limpia el contenido actual de la tabla

    //Recorremos el array de propuestas para generar filas
    propuesta.forEach((item, index) => {
        const fila = `
            <tr>
                <td>${index + 1}</td>
                <td>${item.solicitud}</td>
                <td>${item.productoservicio}</td>
                <td>${item.proveedor}</td>
                <td>${item.fechacalificacion}</td>
                <td>${item.cantidadofrecida}</td>
                <td>${item.preciounitario}</td>
                <td>${item.impuestos}</td>
                <td>${item.valorFletes}</td>
                <td>${item.valortotal}</td>
                <td>${item.vigencia}</td>
                <td>${item.tiempoentrega}</td>
                <td>${item.lugarentrega}</td>
                <td>${item.formadepago}</td>
                <td>${item.descripcionproductoservicio}</td>
                <td>${item.calidad}</td>
                <td>${item.marca}</td>
                <td>${item.garantia}</td>
                <td>${item.capacidadfinanciera}</td>
                <td>${item.capacidadoperativa}</td>
                <td>${item.sostenibilidad}</td>
                <td>${item.experiencia}</td>
                <td>${item.legalidad}</td>
            </tr>
        `;
        tablaPropuestas.innerHTML += fila; // Agrega la fila a la tabla
    });
};

// Funcion para poner el mejor precio del array primero
function ordenarPorPrecio() {
    for (let i = 0; i < propuesta.length - 1; i++) {
        for (let j = 0; j < propuesta.length - i - 1; j++) {
            //Compara precios unitarios de 2 elementos consecutivos
            if (parseFloat(propuesta[j].preciounitario) > parseFloat(propuesta[j + 1].preciounitario)) {
                //Intercambia los elementos si no estan en orden
                let temp = propuesta[j];
                propuesta[j] = propuesta[j+1];
                propuesta[j + 1] = temp;
            }
        }
    }
    console.log("propuestas ordenadas por precio (con for):", propuesta);
    actualizarPropuesta(); //Actualiza la tabla despues de ordenar
}


// que se base en el valor total
// como ordenar un array con un ciclo for, ascendente o descendente
// Hacer que el impuesto sea un %
// Podría solo poner el numero de la solicitud y me debería traer los datos relacionados
// Que alguien la pueda calificar las respuestas o la propuesta
// Campos obligatorios
// Hacer las tablas para las solicitudes de cotización y para las ponderaciones
// Los 3 punticos en nuevaCriticidad
// si no tiene conformidad legal debería cancelar
// poder agregar varios productos y precios
// calcular el promedio de las calificaicones de propuestas validas
// Ponerle justificaciones a todas las calificaciones
//Mejorar el HTML
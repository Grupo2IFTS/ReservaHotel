class Hotel {
    constructor(id_hotel, nombre_hotel, direccion, telefono_hotel) {
        this.id_hotel = id_hotel;
        this.nombre_hotel = nombre_hotel;
        this.direccion = direccion;
        this.telefono_hotel = telefono_hotel;
        this.habitaciones = [];
        this.reservas = [];
    }

    get Id_hotel() {
        return this.id_hotel;
    }

    get Nombre_hotel() {
        return this.nombre_hotel;
    }

    get Direccion() {
        return this.direccion;
    }

    get Telefono() {
        return this.telefono_hotel;
    }

    get Habitaciones() {
        return this.habitaciones;
    }

    get Reservas() {
        return this.reservas;
    }

    set Nombre_hotel(nuevoNombre_hotel) { // CORREGIDO: nombre correcto del setter
        if (!nuevoNombre_hotel || nuevoNombre_hotel.trim() === '') {
            throw new Error('Error: El nombre del hotel no puede estar vacío');
        }

        if (nuevoNombre_hotel.length < 2) {
            throw new Error('Error: El nombre del hotel debe tener al menos 2 caracteres');
        }

        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s\-\.]+$/.test(nuevoNombre_hotel)) {
            throw new Error('Error: El nombre del hotel contiene caracteres inválidos');
        }

        const nombreAnterior = this.nombre_hotel;
        this.nombre_hotel = nuevoNombre_hotel.trim();
        console.log(`Éxito: Nombre cambiado de "${nombreAnterior}" a "${this.nombre_hotel}"`); // CORREGIDO: this.nombre_hotel
    }

    set Direccion(nuevaDireccion) {
        if (!nuevaDireccion || nuevaDireccion.trim() === '') {
            throw new Error('Error: La dirección no puede estar vacía');
        }

        if (nuevaDireccion.length < 10) {
            throw new Error('Error: La dirección debe tener al menos 10 caracteres');
        }

        const direccionAnterior = this.direccion;
        this.direccion = nuevaDireccion.trim();
        console.log(`Éxito: Dirección cambiada de "${direccionAnterior}" a "${this.direccion}"`);
    }

    set Telefono(nuevoTelefono_hotel) {
        if (!nuevoTelefono_hotel) {
            throw new Error('Error: El teléfono no puede estar vacío');
        }

        // Convertir a string y limpiar espacios
        const telefonoStr = nuevoTelefono_hotel.toString().trim();

        // Validar formato de teléfono (permite números, espacios, paréntesis, guiones)
        if (!/^[\d\s\(\)\-\+]+$/.test(telefonoStr)) {
            throw new Error('Error: El teléfono contiene caracteres inválidos');
        }

        // Contar solo los dígitos numéricos
        const digitos = telefonoStr.replace(/\D/g, '');

        if (digitos.length < 7) {
            throw new Error('Error: El teléfono debe tener al menos 7 dígitos');
        }

        if (digitos.length > 15) {
            throw new Error('Error: El teléfono no puede tener más de 15 dígitos');
        }

        const telefonoAnterior = this.telefono_hotel;
        this.telefono_hotel = telefonoStr;
        console.log(`Éxito: Teléfono cambiado de "${telefonoAnterior}" a "${this.telefono_hotel}"`);
    }

    /* Método crear nuevo hotel */
}

class Habitacion {
    constructor(numero, tipo, precio_noche, estado, capacidad, disponibilidad) {
        this.numero = numero;
        this.tipo = tipo;
        this.precio_noche = precio_noche;
        this.estado = estado;
        this.capacidad = capacidad;
        this.disponibilidad = disponibilidad;
        this.servicios = [];
    }

    get Numero() {
        return this.numero;
    }

    get Tipo() {
        return this.tipo;
    }

    get Precio_noche() {
        return this.precio_noche;
    }

    get Estado() {
        return this.estado;
    }

    get Capacidad() {
        return this.capacidad;
    }

    get Disponibilidad() {
        return this.disponibilidad;
    }

    get Servicios() {
        return this.servicios;
    }

    set Numero(nuevoNumero) {
        this.numero = nuevoNumero;
    }

    set Tipo(nuevoTipo) {
        this.tipo = nuevoTipo;
    }

    set Precio_noche(nuevoPrecio_noche) {
        this.precio_noche = nuevoPrecio_noche;
    }

    set Estado(nuevoEstado) {
        this.estado = nuevoEstado;
    }

    set Capacidad(nuevaCapacidad) {
        this.capacidad = nuevaCapacidad;
    }

    set Disponibilidad(nuevaDisponibilidad) {
        this.disponibilidad = nuevaDisponibilidad;
    }
}

class Reserva {
    constructor(id_reserva, numero_habitacion, fecha_checkin, fecha_checkout, estado) {
        this.id_reserva = id_reserva;
        this.cliente = []; // Esto debería ser un objeto Cliente, no un array
        this.numero_habitacion = numero_habitacion;
        this.fecha_checkin = fecha_checkin;
        this.fecha_checkout = fecha_checkout;
        this.estado = estado;
    }

    get Id_reserva() {
        return this.id_reserva;
    }

    get Cliente() {
        return this.cliente;
    }

    get Numero_habitacion() {
        return this.numero_habitacion;
    }

    get Fecha_checkin() {
        return this.fecha_checkin;
    }

    get Fecha_checkout() {
        return this.fecha_checkout;
    }

    get Estado() {
        return this.estado;
    }

    set Numero_habitacion(nuevoNumero_habitacion) {
        if (!nuevoNumero_habitacion && nuevoNumero_habitacion !== 0) {
            throw new Error('Error: El número de habitación no puede estar vacío');
        }

        const numeroStr = nuevoNumero_habitacion.toString().trim();

        if (!/^\d+$/.test(numeroStr)) {
            throw new Error('Error: El número de habitación debe contener solo dígitos');
        }

        if (parseInt(numeroStr) <= 0) {
            throw new Error('Error: El número de habitación debe ser mayor a 0');
        }

        if (numeroStr.length > 10) {
            throw new Error('Error: El número de habitación no puede tener más de 10 dígitos');
        }

        const numeroAnterior = this.numero_habitacion;
        this.numero_habitacion = parseInt(numeroStr);
        console.log(`Éxito: Número cambiado de "${numeroAnterior}" a "${this.numero_habitacion}"`);
    }

    set Fecha_checkin(nuevaFecha_checkin) {
        if (!nuevaFecha_checkin) {
            throw new Error('Error: La fecha de check-in no puede estar vacía');
        }
        
        // Validación básica de fecha
        if (isNaN(Date.parse(nuevaFecha_checkin))) {
            throw new Error('Error: La fecha de check-in no es válida');
        }
        
        this.fecha_checkin = nuevaFecha_checkin;
    }

    set Fecha_checkout(nuevaFecha_checkout) {
        if (!nuevaFecha_checkout) {
            throw new Error('Error: La fecha de check-out no puede estar vacía');
        }
        
        if (isNaN(Date.parse(nuevaFecha_checkout))) {
            throw new Error('Error: La fecha de check-out no es válida');
        }
        
        this.fecha_checkout = nuevaFecha_checkout;
    }

    set Estado(nuevoEstado) {
        const estadosValidos = ['confirmada', 'pendiente', 'cancelada', 'completada'];
        const estadoLower = nuevoEstado.toLowerCase().trim();

        if (!estadosValidos.includes(estadoLower)) {
            throw new Error(`Error: Estado inválido. Los estados válidos son: ${estadosValidos.join(', ')}`);
        }

        const estadoAnterior = this.estado;
        this.estado = estadoLower;
        console.log(`Éxito: Estado cambiado de "${estadoAnterior}" a "${this.estado}"`);
    }

}

class Cliente {
    constructor(dni, nombre, apellido, email, telefono) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.reservas = [];
    }

    get Dni() {
        return this.dni;
    }

    get Nombre() {
        return this.nombre;
    }

    get Apellido() {
        return this.apellido;
    }

    get Email() {
        return this.email;
    }

    get Telefono() {
        return this.telefono;
    }

    get Reservas() {
        return this.reservas;
    }

    set Nombre(nuevoNombre) {
        if (!nuevoNombre || nuevoNombre.trim() === '') {
            throw new Error('Error: El nombre no puede estar vacío'); 
        }

        if (nuevoNombre.length < 2) {
            throw new Error('Error: El nombre debe tener al menos 2 caracteres');
        }

        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\-]+$/.test(nuevoNombre)) {
            throw new Error('Error: El nombre contiene caracteres inválidos');
        }

        const nombreAnterior = this.nombre;
        this.nombre = nuevoNombre.trim();
        console.log(`Éxito: Nombre cambiado de "${nombreAnterior}" a "${this.nombre}"`);
    }

    set Apellido(nuevoApellido) {
        if (!nuevoApellido || nuevoApellido.trim() === '') {
            throw new Error('Error: El apellido no puede estar vacío');
        }

        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\-]+$/.test(nuevoApellido)) {
            throw new Error('Error: El apellido contiene caracteres inválidos');
        }

        this.apellido = nuevoApellido.trim();
    }

    set Email(nuevoEmail) {
        if (!nuevoEmail || nuevoEmail.trim() === '') {
            throw new Error('Error: El email no puede estar vacío');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(nuevoEmail)) {
            throw new Error('Error: El formato del email no es válido');
        }

        this.email = nuevoEmail.trim();
    }

    set Telefono(nuevoTelefono) {
        if (!nuevoTelefono) {
            throw new Error('Error: El teléfono no puede estar vacío');
        }

        const telefonoStr = nuevoTelefono.toString().trim();
        const digitos = telefonoStr.replace(/\D/g, '');

        if (digitos.length < 7) {
            throw new Error('Error: El teléfono debe tener al menos 7 dígitos');
        }

        this.telefono = telefonoStr;
    }
}

class Servicio {
    constructor(id_Servicio, nombre_servicio, descripcion, costo) {
        this.id_Servicio = id_Servicio;
        this.nombre_servicio = nombre_servicio;
        this.descripcion = descripcion;
        this.costo = costo;
    }

    get Id_Servicio() {
        return this.id_Servicio;
    }

    get Nombre_servicio() {
        return this.nombre_servicio;
    }

    get Descripcion() {
        return this.descripcion;
    }

    get Costo() {
        return this.costo;
    }

    set Id_Servicio(nuevoId_Servicio) { // CORREGIDO: mayúscula en "Servicio"
        this.id_Servicio = nuevoId_Servicio;
    }

    set Nombre_servicio(nuevoNombre_servicio) {
        this.nombre_servicio = nuevoNombre_servicio;
    }

    set Descripcion(nuevaDescripcion) {
        this.descripcion = nuevaDescripcion;
    }

    set Costo(nuevoCosto) {
        this.costo = nuevoCosto;
    }
}

class Pago {
    constructor(id_Pago, monto, metodo_pago, estado_pago, fecha_pago) {
        this.id_Pago = id_Pago;
        this.monto = monto;
        this.metodo_pago = metodo_pago;
        this.estado_pago = estado_pago;
        this.fecha_pago = fecha_pago;
    }

    get Id_Pago() {
        return this.id_Pago;
    }

    get Monto() {
        return this.monto;
    }

    get Metodo_pago() {
        return this.metodo_pago;
    }

    get Estado_pago() {
        return this.estado_pago;
    }

    get Fecha_pago() {
        return this.fecha_pago;
    }

    set Id_Pago(nuevoId_pago) {
        this.id_Pago = nuevoId_pago;
    }

    set Monto(nuevoMonto) {
        this.monto = nuevoMonto;
    }

    set Metodo_pago(nuevoMetodo_pago) {
        this.metodo_pago = nuevoMetodo_pago;
    }

    set Estado_pago(nuevoEstado_pago) {
        this.estado_pago = nuevoEstado_pago;
    }

    set Fecha_pago(nuevaFecha_pago) {
        this.fecha_pago = nuevaFecha_pago;
    }
}
class CRUD {
    constructor() {
        this.data = new Map();
    }

    // Create - Agregar un elemento
    create(item) {
        this.data.set(item.id, item);
    }

    // Read - Obtener todos los elementos
    read() {
        return Array.from(this.data.values());
    }

    // Update - Actualizar un elemento por su clave
    update(id, newItem) {
        if (this.data.has(id)) {
            this.data.set(id, newItem);
            return true; // Éxito en la actualización
        }
        return false; // Clave no encontrada
    }

    // Delete - Eliminar un elemento por su clave
    delete(id) {
        if (this.data.has(id)) {
            this.data.delete(id);
            return true; // Éxito en la eliminación
        }
        return false; // Clave no encontrada
    }
}

// Uso de la clase CRUD
const miCrud = new CRUD();

// Definir una clase de modelo para los elementos
class Item {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}

// Agregar elementos
miCrud.create(new Item(1, 'Ejemplo 1'));
miCrud.create(new Item(2, 'Ejemplo 2'));

// Obtener todos los elementos
console.log(miCrud.read());

// Actualizar un elemento
miCrud.update(1, new Item(1, 'Nuevo Ejemplo 1'));

// Eliminar un elemento
miCrud.delete(2);

// Obtener todos los elementos después de la actualización y eliminación
console.log(miCrud.read());

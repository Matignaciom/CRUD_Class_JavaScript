class CRUD {
    constructor() {
        this.data = new Map();
    }

    // Create - Agregar un elemento
    static create(data, item) {
        if (data instanceof CRUD) {
            data.data.set(item.id, item);
        }
    }

    // Read - Obtener todos los elementos
    static read(data) {
        if (data instanceof CRUD) {
            return Array.from(data.data.values());
        }
        return [];
    }

    // Update - Actualizar un elemento por su clave
    static update(data, id, newItem) {
        if (data instanceof CRUD && data.data.has(id)) {
            data.data.set(id, newItem);
            return true; // Éxito en la actualización
        }
        return false; // Clave no encontrada
    }

    // Delete - Eliminar un elemento por su clave
    static delete(data, id) {
        if (data instanceof CRUD && data.data.has(id)) {
            data.data.delete(id);
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
CRUD.create(miCrud, new Item(1, 'Ejemplo 1'));
CRUD.create(miCrud, new Item(2, 'Ejemplo 2'));

// Obtener todos los elementos
console.log(CRUD.read(miCrud));

// Actualizar un elemento
CRUD.update(miCrud, 1, new Item(1, 'Nuevo Ejemplo 1'));

// Eliminar un elemento
CRUD.delete(miCrud, 2);

// Obtener todos los elementos después de la actualización y eliminación
console.log(CRUD.read(miCrud));

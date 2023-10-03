# CRUD Class for JavaScript
Este proyecto es una implementación simple de una clase CRUD (Crear, Leer, Actualizar, Eliminar) en JavaScript. La clase CRUD te permite realizar operaciones básicas de gestión de datos, como agregar, leer, actualizar y eliminar elementos de una colección.

## Funcionalidades
La clase `CRUD` ofrece las siguientes funcionalidades:

### 1. Crear (Create)
Puedes agregar elementos a la colección utilizando el método `CRUD.create(data, item)`, donde `data` es una instancia de la clase `CRUD` y `item` es el elemento que deseas agregar. El elemento se guarda en la colección con una clave única.

### 2. Leer (Read)
Puedes obtener todos los elementos de la colección utilizando el método `CRUD.read(data)`, donde `data` es una instancia de la clase `CRUD`. Esto te devuelve una matriz con todos los elementos almacenados en la colección.

### 3. Actualizar (Update)
Puedes actualizar un elemento existente en la colección utilizando el método `CRUD.update(data, id, newItem)`, donde `data` es una instancia de la clase `CRUD`, `id` es la clave del elemento que deseas actualizar y `newItem` es el nuevo objeto con el que deseas reemplazar el elemento existente.

### 4. Eliminar (Delete)
Puedes eliminar un elemento de la colección utilizando el método `CRUD.delete(data, id)`, donde `data` es una instancia de la clase `CRUD` y `id` es la clave del elemento que deseas eliminar.

## Uso Ejemplificado

```javascript
// Crear una instancia de la clase CRUD
const miCrud = new CRUD();

// Definir una clase de modelo para los elementos
class Item {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}

// Agregar elementos a la colección
CRUD.create(miCrud, new Item(1, 'Ejemplo 1'));
CRUD.create(miCrud, new Item(2, 'Ejemplo 2'));

// Obtener todos los elementos de la colección
console.log(CRUD.read(miCrud));

// Actualizar un elemento en la colección
CRUD.update(miCrud, 1, new Item(1, 'Nuevo Ejemplo 1'));

// Eliminar un elemento de la colección
CRUD.delete(miCrud, 2);

// Obtener todos los elementos de la colección después de la actualización y eliminación
console.log(CRUD.read(miCrud));
```

Este proyecto es una implementación básica de una clase CRUD en JavaScript que puede servir como punto de partida.

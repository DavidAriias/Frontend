
const carro = {
  id: 1,
  nombre: 'LaFerrari',
  date: new Date(),
  marca: {
    id: 1,
    nombre: 'Ferrari',
    ubicación: 'Europa',
    age: 100,
  },
  inventario: [
    {
      id: 1,
      color: 'Rojo',
      cantidad: 5,
      precio: 11000000
    },
    {
      id: 1,
      color: 'Blanco',
      cantidad: 2,
      precio: 10000000
    },
    {
      id: 1,
      color: 'Amarillo',
      cantidad: 5,
      precio: 11500000
    },
  ],
  totalInventario: function () {
    let total = 0
    this.inventario.forEach(inventario =>{
      total = total + inventario.precio * inventario.cantidad
    })
    return total;
  },
  costo: 1000000,
  saludo: function () {
    return `Hola ${this.nombre}`
  }
}

//carro.nombre = 'F40'
carro.costo = '1500000'
console.log(carro)

const saludo = carro.saludo()
console.log(saludo)
console.log(carro.totalInventario())
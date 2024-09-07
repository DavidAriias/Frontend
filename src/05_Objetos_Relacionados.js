
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
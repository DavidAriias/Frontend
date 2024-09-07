const obtenerInfo = (name = 'David', apellido = 'Arias') => `${name} ${apellido}`

const sum = (a = 0, b = 0) => a + b

const info = obtenerInfo('De Jesus', 'Molina')

console.log(info)

console.log(sum(10, 10))
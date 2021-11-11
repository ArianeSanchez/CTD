let Numeros = [1,2,3,4];
let Alfabeto = ["a","b","c","d"];

//Item A
console.log(Numeros[3])
//Volta 4

console.log(Alfabeto[2])
//Volta c

//Item B
//console.log(Numeros.splice(0,2))
//Volta [1,2]

Numeros[1] = 8
Numeros[2] = 9
Numeros[3] = 7
Numeros[4] = 6
console.log(Numeros)
//Volta [1,8,9,7,6]

Numeros.pop()
console.log(Numeros)
//Volta [1,8,9,7]




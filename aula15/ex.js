let num1;

num1 = parseInt(prompt("Informe um número:"))
console.log(`Raiz quadrada: ${num1 ** (1/2)}`)
console.log(`Numero é inteiro: ${Number.isInteger(num1)}`)
console.log(`É NaN: ${Number.isNaN(num1)}`)
console.log(`Arredondado para baixo: ${Math.floor(num1)}`)
console.log(`Arredondado para cima: ${Math.ceil(num1)}`)
console.log(`Com duas casas decimais: ${num1.toFixed(2)}`)


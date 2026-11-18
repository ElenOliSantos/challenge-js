//1. Recibo da conta

// let value = parseFloat(prompt("Digite o valor da conta:"));
// let people = Number(prompt("Quantas pessoas?"));
// let tax = prompt("Vai pagar a taxa de serviço (10%)? (s/n)");

// if (tax === "S" || tax === "s") {
//     value += 0.1 * value
//     let total = value / people
//     console.log(`Valor para cada pessoa: R$${total.toFixed(2)}`);
// }
// else if (tax === "N" || tax === "n") {
//     let total = value / people
//     console.log(`Valor para cada pessoa: R$${total.toFixed(2)} `);
// }
// else {
//     console.log("Digite um valor válido!");
// }

// 2. Saldo do bilhete

// let leftover = parseFloat(prompt("Digite o saldo do bilhete:"))

// let trip = Math.floor(leftover / 5)
// let remaining = leftover % 5

// console.log(`Consegue ${trip} viagens. Saldo que sobrou: ${remaining.toFixed(2)}`);

//3. Tempo de download

// let arquive = Number(prompt("Digite o tamanho do arquivo em GB:"))

// let internet = Number(prompt("Digite a velocidade de internet em Mbps:"))

// if (arquive > 0 && internet > 0) {
//     let total = arquive * 8192
//     let download = Math.floor(total / internet)
//     let minutes = Math.floor(download / 60)
//     let seconds = download % 60
//     console.log(`O tempo estimado para download é ${minutes} minutos e ${seconds} segundos. `);
    
// } else {
//     console.log("Digite um valor válido!");
    
// }

//4. Troco do caixa

let value = parseFloat(prompt("Digite o valor da compra:"))

let value_gained = parseFloat(prompt("Digite o valor que o cliente pagou:"))

let change = value_gained - value

let value100 = Math.floor(change / 100);
change = change % 100

let value50 = Math.floor(change / 50)
change = change % 50

let value20 = Math.floor(change / 20)
change = change % 20

let value10 = Math.floor(change / 10)
change = change % 10

let value5 = Math.floor(change / 5)
change = change % 5

let value2 = Math.floor(change / 2)
change = change % 2

let value1 = Math.floor(change / 1)

console.log(`Foram usadas ${value100} notas de 100`);
console.log(`Foram usadas ${value50} notas de 50`);
console.log(`Foram usadas ${value20} notas de 20`);
console.log(`Foram usadas ${value10} notas de 10`);
console.log(`Foram usadas ${value5} notas de 2`);
console.log(`Foram usadas ${value1} notas de 1`);


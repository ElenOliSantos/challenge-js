//1. Recibo da conta

// let value = parseFloat(prompt("Digite o valor da conta:"));
// let people = Number(prompt("Quantas pessoas?"));
// let tax = prompt("Vai pagar a taxa de serviço (10%)? (s/n)");

// if (tax === "S" || tax === "s") {
//     value += 0.1 * value
//     value / people
//     console.log(`Valor para cada pessoa: ${value.toFixed(2)}`);
// }
// else if (tax === "N" || tax ==="n") {
//     value / people
//     console.log(`Valor para cada pessoa: R$${value.toFixed(2)} `);
// }
// else {
//     console.log("Digite um valor válido!");
// }


//2. Bilhete Único

// let ticket = parseFloat(prompt("Digite o saldo que gostaria de colocar em seu bilhete:"));
// let tariff = 5
// let trips = Math.floor(ticket / tariff)
// let remainder = ticket % tariff

// if (isNaN(ticket)) {
//     console.log("Digite um valor válido!"); 
// }
// else {
// console.log(`Viagens que poderá fazer: ${trips}. Saldo que sobrou:R$${remainder.toFixed(2)} `);
// }


//3. Tempo de download

// let arquive = Number(prompt("Digite o tamanho do arquivo em GB:"));

// let internet = Number(prompt("Digite a velocidade da internet em Mbps:"))

// if (arquive > 0 && internet > 0) {
//     let arquive_mbps = arquive * 8192 // Para conversão em Megabits e fazer o tamanho correto do arquivo
//     let result = arquive_mbps / internet

//     let minutes = Math.floor(result / 60) // Transformar em minuto
//     let seconds = Math.round(result % 60); // Ter os segundos aproximado

//     console.log(`O tempo estimado para download é: ${minutes} minutos e ${seconds} segundos.`);   
// }
// else {
//     console.log("Digite um valor válido!");
// }


//4. Troco do caixa

// let value = Number(prompt("Digite o valor da compra:"))
// let amount_gained = Number(prompt("Digite o valor que foi pago:"))

// let change = value - amount_gained





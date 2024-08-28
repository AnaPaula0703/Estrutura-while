//Usando a estrutura de repetição while(enquanto)
/*let contador = 1;
while(contador < 11){
  console.log(`Bom dia`);
  contador += 1;
}*/

//Soma números até que se digite 0
const prompt = require('prompt-sync');
const entrada = prompt();
var numero = entrada('Digite um número para somar: ');
var soma = 0;
while(numero != 0){
  soma += parseInt(numero);
  numero = entrada('Digite um novo valor: ');
}
console.log(`A soma é: ${soma}`);
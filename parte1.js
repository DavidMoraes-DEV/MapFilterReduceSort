"use strict";
exports.__esModule = true;
var list1 = [1, 2, 3, 4];
var list2 = [];
var nomes = ['MARIA', 'JOAO', 'ANABELA'];
// --------------------------------------------------------------------------------------------------------------------
// map: aplica uma função a cada elemento da coleção original, retornando uma nova coleção com os elementos alterados
function dobro(x) {
    return x * 2;
}
function triplo(x) {
    return x * 3;
}
console.log(dobro(5));
console.log("-------------------------------------------------------------------------------------------------------\n");
var m1 = list1.map(dobro);
var m2 = list1.map(triplo);
var m3 = list1.map(function (x) { return x * 10; }); //Obs. A função recebida na função ".map" pode ser uma expressão lambda pois ela é uma função anônima
console.log("Original: ", list1);
console.log("\nMAP ------------------------------");
console.log("Dobro:    ", m1);
console.log("Triplo:   ", m2);
console.log("x10:      ", m3);
// --------------------------------------------------------------------------------------------------------------------
// filter: retorna uma nova coleção contendo apenas aqueles elementos da coleção original que satisfazem um dado predicado
function par(x) {
    return x % 2 == 0;
}
var f1 = list1.filter(par);
var f2 = list1.filter(function (x) { return x > 2; });
var f3 = list1.filter(function (x) { return x % 2 != 0; });
console.log("\n-------------------------------------------------------------------------------------------------------\n");
console.log("Original: ", list1);
console.log("\nFILTER ---------------------------");
console.log("Nº 5 eh par? ", par(5));
console.log("Nº pares:    ", f1);
console.log("Maior que 2: ", f2);
console.log("Nº Impares:  ", f3);
// --------------------------------------------------------------------------------------------------------------------
// reduce: aplica cumulativamente uma função aos elementos de uma coleção, retornando o resultado final.
// * você pode informar, opcionalmente, um valor inicial como parâmetro (necessário para coleção vazia).
console.log("\n-------------------------------------------------------------------------------------------------------\n");
console.log("Original: ", list1);
console.log("\nREDUCE ---------------------------");
function soma(x, y) {
    return x + y;
}
function produto(x, y) {
    return x * y;
}
var r1 = list1.reduce(soma);
var r2 = list1.reduce(produto);
console.log("Soma dos Elementos: ", r1);
console.log("Multiplo acumulativos dos Elementos: ", r2);

/**.ts é a extenção do TypeScript */
export { } /*-> Utilizado para isolar o escopo e evitar problemas de conflito de escopo com algum script JavaScript, pois o script tem o escopo aberto compartilhando o mesmo escopo de variáveis e no TypeScript conseguimos ter um controle maior */

let list1 = [1, 2, 3, 4];
let list2 = [];
let nomes = ['MARIA', 'JOAO', 'ANABELA'];

// --------------------------------------------------------------------------------------------------------------------
// map: aplica uma função a cada elemento da coleção original, retornando uma nova coleção com os elementos alterados

function dobro(x : number) : number {
    return x * 2;
}

function triplo(x : number) : number {
    return x * 3;
}

console.log(dobro(5));
console.log("-------------------------------------------------------------------------------------------------------\n");

let m1 = list1.map(dobro);
let m2 = list1.map(triplo);
let m3 = list1.map(x => x*10); //Obs. A função recebida na função ".map" pode ser uma expressão lambda pois ela é uma função anônima


console.log("Original: ", list1);

console.log("\nMAP ------------------------------");
console.log("Dobro:    ", m1);
console.log("Triplo:   ", m2);
console.log("x10:      ", m3);

// --------------------------------------------------------------------------------------------------------------------
// filter: retorna uma nova coleção contendo apenas aqueles elementos da coleção original que satisfazem um dado predicado

function par(x: number) : boolean {
    return x % 2 == 0;
}

let f1 = list1.filter(par);
let f2 = list1.filter(x => x > 2);
let f3 = list1.filter(x => x % 2 != 0);

console.log("\n-------------------------------------------------------------------------------------------------------\n");
console.log("Original: ", list1);

console.log("\nFILTER ---------------------------");

console.log("Nº 5 eh par? ", par(5));
console.log("Nº pares:    ", f1)
console.log("Maior que 2: ", f2);
console.log("Nº Impares:  ", f3);

// --------------------------------------------------------------------------------------------------------------------
// reduce: aplica cumulativamente uma função aos elementos de uma coleção, retornando o resultado final.
// * você pode informar, opcionalmente, um valor inicial como parâmetro (necessário para coleção vazia).

console.log("\n-------------------------------------------------------------------------------------------------------\n");
console.log("Original: ", list1);

console.log("\nREDUCE ---------------------------");

function soma(x: number, y: number) : number {
    return x+y;
}

function produto(x: number, y: number) : number {
    return x*y;
}

let r1 = list1.reduce(soma);
let r2 = list1.reduce(produto);

console.log("Soma dos Elementos: ", r1);
console.log("Multiplo acumulativos dos Elementos: ", r2);

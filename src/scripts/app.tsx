let uzenet: string = "Szia világ.";
console.log(uzenet);

let keszenVan: boolean = true;
let szam: number = 25;
let nev: string = "Béla";
let szamLista: number[] = [1, 2, 3];
let szoLista: string[] = ["Szia", "Hello", "Bela"];
let tupleLista: [string, number] = ["Helloka", 5];
let barmilyenTipus: any = "Ez lehet bármi is.";

// Függvények (A `function`-nél a visszatérési értéket is definiálhatjuk! Ez elég szuper)
let szam1: number = 5;
let szam2: number = 10;

function osszead(a: number, b: number): number {
    return a+b;
}

console.log(osszead(10, 5));


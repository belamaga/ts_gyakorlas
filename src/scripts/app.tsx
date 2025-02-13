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

let a: number = 10;
let b: number = 5;
console.log(`${a} és ${b} összege: ${osszead(a, b)}`);

// Interfacek
interface Ember
{
    azonosito: string,
    nev: string,
    kor: number
}

const diak: Ember = { azonosito: "0001", nev: "Lajos", kor: 18 }
console.log(`Diákunk neve ${diak.nev}, ki ${diak.kor} éves, azonosítója pedig ${diak.azonosito}.`);

// Osztályok
class Allatka {
    nev: string;
    atlagKor: number;

    constructor(nev: string, atlagKor: number)
    {
        this.nev = nev;
        this.atlagKor = atlagKor;
    }
    
    adat(): void {
        console.log(`${this.nev} átlagkora ${this.atlagKor} év.`)
    }
}

let kutya = new Allatka("Kutya", 15);
kutya.adat();

// Enumok
enum Szinek { Piros, Narancs, Sárga, Zöld, Kék, Lila}
let sz: Szinek = Szinek.Sárga;
console.log(`Szín indexe: ${sz}`);

// Generikus típusok
function identitas<T>(arg: T): T {
    return arg
}
console.log(identitas<string>("Hello"));
console.log(identitas<number>(100));
"use strict";
let uzenet = "Szia világ.";
console.log(uzenet);
let keszenVan = true;
let szam = 25;
let nev = "Béla";
let szamLista = [1, 2, 3];
let szoLista = ["Szia", "Hello", "Bela"];
let tupleLista = ["Helloka", 5];
let barmilyenTipus = "Ez lehet bármi is.";
// Függvények (A `function`-nél a visszatérési értéket is definiálhatjuk! Ez elég szuper)
let szam1 = 5;
let szam2 = 10;
function osszead(a, b) {
    return a + b;
}
let a = 10;
let b = 5;
console.log(`${a} és ${b} összege: ${osszead(a, b)}`);
const diak = { azonosito: "0001", nev: "Lajos", kor: 18 };
console.log(`Diákunk neve ${diak.nev}, ki ${diak.kor} éves, azonosítója pedig ${diak.azonosito}.`);
// Osztályok
class Allatka {
    constructor(nev, atlagKor) {
        this.nev = nev;
        this.atlagKor = atlagKor;
    }
    adat() {
        console.log(`${this.nev} átlagkora ${this.atlagKor} év.`);
    }
}
let kutya = new Allatka("Kutya", 15);
kutya.adat();
// Enumok
var Szinek;
(function (Szinek) {
    Szinek[Szinek["Piros"] = 0] = "Piros";
    Szinek[Szinek["Narancs"] = 1] = "Narancs";
    Szinek[Szinek["S\u00E1rga"] = 2] = "S\u00E1rga";
    Szinek[Szinek["Z\u00F6ld"] = 3] = "Z\u00F6ld";
    Szinek[Szinek["K\u00E9k"] = 4] = "K\u00E9k";
    Szinek[Szinek["Lila"] = 5] = "Lila";
})(Szinek || (Szinek = {}));
let sz = Szinek.Sárga;
console.log(`Szín indexe: ${sz}`);
// Generikus típusok
function identitas(arg) {
    return arg;
}
console.log(identitas("Hello"));
console.log(identitas(100));

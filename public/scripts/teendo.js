"use strict";
let lista = [];
function teendoHozzaad(szoveg) {
    const ujTeendo = { id: lista.length + 1, teendo: szoveg, teljesitve: false };
    lista.push(ujTeendo);
}
teendoHozzaad("Számológép programozás.");
lista.forEach(todo => {
    console.log(`${todo.id}: '${todo.teendo}', amely ${todo.teljesitve}`);
});

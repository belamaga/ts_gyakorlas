interface TeendoLista {
    id: number;
    teendo: string;
    teljesitve: boolean;
}

let lista: TeendoLista[] = [];

function teendoHozzaad(szoveg: string): void {
    const ujTeendo: TeendoLista = { id: lista.length + 1, teendo: szoveg, teljesitve: false }
    lista.push(ujTeendo);
}

teendoHozzaad("Számológép programozás.")

lista.forEach(todo => {
    console.log(`${todo.id}: '${todo.teendo}', amely ${todo.teljesitve}`);
});
function szamol(szam1: number, szam2: number, muvelet: string): any {
    switch (muvelet) {
        case "osszeadas":
            return szam1 + szam2;
        case "kivonas":
            return szam1 - szam2;
        case "szorzas":
            return szam1 * szam2;
        case "osztas":
            return szam1 / szam2;
        case "modulo":
            return szam1 % szam2;
        default:
            return "Helytelen használat.";
    }
}

console.log(szamol(1, 2, "osszeadas"))
console.log(szamol(1, 2, "kivonas"))
console.log(szamol(1, 2, "szorzas"))
console.log(szamol(1, 2, "osztas"))
console.log(szamol(1, 2, "modulo"))
function segitiga(ab,bc){
    var ac = Math.pow(ab,2) + Math.pow(bc,2);
    console.log("Akar AC = ",ac);
    console.log("panjang sisi AC pada segitiga siku-siku tersebut adalah : ",Math.sqrt(ac));
}

var ab = 8;
var bc = 6;

console.log("Nilai AB : ",ab);
console.log("Nilai BC : ",bc);
segitiga(ab,bc);
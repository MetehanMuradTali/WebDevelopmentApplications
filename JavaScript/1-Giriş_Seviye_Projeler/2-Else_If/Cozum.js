//Soru1
sayi1 = 50
if ((sayi1 > 10) && (50 > sayi1)) {
    console.log("Sayi 10 ve 50 arasindadir");
} else {
    console.log("Sayi 10 ve 50 arasinda degildir");
}
//Soru2
if ((sayi1 > 0) && (sayi1 % 2 == 1)) {
    console.log("Sayi pozitif ve tek sayidir");
} else {
    console.log("Sayi pozitif ve tek sayi degildir");
}
//Soru3
var x = 5,
    y = 4,
    z = 3;

if (x > y && x > z) {
    console.log("x En büyük sayidir");
} else if (y > x && y > z) {
    console.log("y En büyük sayidir");
} else if (z > y && z > x) {
    console.log("z En büyük sayidir");
} else {
    console.log("Sayilar esittir");
}

//Soru4
var vize1 = 50,
    vize2 = 55,
    final = 70;
var ortalama = ((vize1 + vize2) / 2 * 4 / 10 + final * 6 / 10);
console.log("ortalamaniz:" + ortalama);
//Soru4.a
console.log("Soru4.a")
if (ortalama >= 50) {
    console.log("geçtiniz")
} else {
    console.log("kaldiniz")
}
//Soru4.b
console.log("Soru4.b")
if (ortalama >= 50 && final >= 50) {
    console.log("geçtiniz")
} else {
    console.log("kaldiniz")
}
//Soru4.c
console.log("Soru4.c")
if (ortalama >= 50 || final >= 70) {
    console.log("geçtiniz")
} else {
    console.log("kaldiniz")
}
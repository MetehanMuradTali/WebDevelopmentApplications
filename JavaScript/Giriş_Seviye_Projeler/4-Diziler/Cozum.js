//Soru1
var Dizi = ["Elma", "Armut", "Muz", "Çilek"]
console.log(`${Dizi}`)

//Soru2
var uzunluk = Dizi.length
console.log(`Uzunluk=${uzunluk}`)

//Soru3
var ilk_eleman = Dizi[0]
var son_eleman = Dizi[Dizi.length - 1]
console.log(`İlk Eleman=${ilk_eleman}`)
console.log(`Son Eleman=${son_eleman}`)

//Soru4
if (Dizi.includes("Elma")) {
    console.log("evet")
} else {
    console.log("hayır")
}
//Soru5
Dizi.push("Kiraz")
console.log(`${Dizi}`)
    //Soru6
Dizi.pop()
Dizi.pop()
console.log(`${Dizi}`)

//Soru7
var Ogrenci_1 = [
    "Yiğit ",
    "Bilgi",
    2010, [70, 60, 80]
]
var Ogrenci_2 = [
    "Ada",
    "Bilgi",
    2012, [80, 80, 90]
]
var Ogrenci_3 = [
    "Ahmet",
    "Turan",
    2009, [60, 60, 70]
]

var ogrenciler = [Ogrenci_1, Ogrenci_2, Ogrenci_3]
var yil = new Date().getFullYear();
console.log(`Ogrenci1 yasi=${yil-ogrenciler[0][2]}`)
console.log(`Ogrenci2 yasi=${yil-ogrenciler[1][2]}`)
console.log(`Ogrenci3 yasi=${yil-ogrenciler[2][2]}`)

var Ogrenci1_not = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3
var Ogrenci2_not = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3
var Ogrenci3_not = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3
console.log(`Ogrenci1 not=${parseInt(Ogrenci1_not)}`)
console.log(`Ogrenci2 not=${parseInt(Ogrenci2_not)}`)
console.log(`Ogrenci3 not=${parseInt(Ogrenci3_not)}`)
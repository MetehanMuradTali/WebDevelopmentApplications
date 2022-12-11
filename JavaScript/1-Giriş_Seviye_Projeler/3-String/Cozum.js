let url = "https://www.sadikturan.com/";
let kursAdi = "Komple Web Geliştirme Kursu"

//Soru1
var uzunluk = url.length
console.log(uzunluk)
    //Soru2
sayi = kursAdi.split(" ").length
console.log(sayi)
    //Soru3
if (url.startsWith("https")) {
    console.log("evet")
} else {
    console.log("hayır")
}
//Soru4
if (kursAdi.includes("Eğitimi")) {
    console.log("evet")
} else {
    console.log("hayır")
}
//Soru5
var bilgi = `${url}${kursAdi.toLowerCase().replaceAll(" ", "-").replaceAll("ş","s")}`

console.log(bilgi)
var sayilar = [1, 5, 7, 15, 3, 25]
var urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"]

var ogrenciler = [
    { "ad": "yiğit", "soyad": "bilgi", "notlar": [60, 70, 60] },
    { "ad": "ada", "soyad": "bilgi", "notlar": [80, 70, 80] },
    { "ad": "çınar", "soyad": "turan", "notlar": [70, 70, 60] },
]

//Soru1

console.log("Soru1:")
for (var sayi of sayilar) {
    console.log(sayi * sayi)
}

//Soru2

console.log("Soru2:")
for (var sayi of sayilar) {
    if (sayi % 5 == 0) {
        console.log(sayi)
    }
}

//Soru3

var toplam = 0
for (var sayi of sayilar) {
    if (sayi % 2 == 0) {
        toplam += sayi
    }
}
console.log(`Çift sayilarin toplami = ${toplam}`)

//Soru4

for (var urun of urunler) {
    console.log(urun.toUpperCase())
}

//Soru5

var toplam2 = 0
for (var urun of urunler) {
    if (urun.includes("samsung")) {
        toplam2++
    }
}
console.log(`samsung gecen urunlerin toplami = ${toplam2}`)

//Soru6
for (var ogrenci of ogrenciler) {
    var toplam_not = 0
    for (var not of ogrenci.notlar) {
        toplam_not += not
    }
    console.log(`${ogrenci.ad} ${ogrenci.soyad} ortalamasi = ${parseInt(toplam_not/3) } `)
    toplam_not / 3 > 50 ? console.log("Basarili") : console.log("Basarisiz")
}

//Soru7
let ogrenci_ortalamalar = [];
for (let ogrenci of ogrenciler) {

    let not_toplam = 0;
    let ortalama = 0;
    let adet = 0;
    for (let not of ogrenci.notlar) {
        not_toplam += not;
        adet++;
    }
    ortalama = not_toplam / adet;
    ogrenci_ortalamalar.push(ortalama);
}

let not_toplam = 0;
for (ogr_ortalama of ogrenci_ortalamalar) {
    not_toplam += ogr_ortalama;
}

console.log("sınıf ortalaması: ", not_toplam / ogrenci_ortalamalar.length);
//Soru1

function yazici(kelime, tekrar) {
    for (let i = 0; i < tekrar; i++) {
        console.log(kelime)
    }
}

//Soru2

function dikdortgen_hesaplama(x, y) {
    let alan = 0,
        cevre = 0

    alan = x * y
    cevre = (x * 2) + (y * 2)
    console.log(`Dikdortgenin Alani= ${alan} , Cevresi= ${cevre}`)
}


//Soru3

function yazi_Tura() {
    let random = Math.random();
    random.toFixed() == 1 ? console.log("Yazi") : console.log("Tura")
}

//Soru4

function tam_bolen(sayi) {
    tam_bolenler = []
    for (let i = 1; i <= sayi / 2; i++) {
        sayi % i == 0 ? tam_bolenler.push(i) : ""
    }
    return tam_bolenler
}
console.log(tam_bolen(10))

//Soru5

function toplam() {
    let toplam = 0
    for (let sayi of arguments) {
        toplam += sayi
    }
    console.log(toplam)
}
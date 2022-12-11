//Soru1
var siprais_1 = {
    "siparis_id": 101,
    "siparis_tarihi": "31.12.2022",
    "ödeme_sekli": "Kredi Karti",
    "kargo_adresi": {
        "mahalle": "yahya kaptan",
        "ilce": "izmit",
        "sehir": "kocaeli"
    },
    "satin_alinan_ürünler": [{
        "ürün_id": 5,
        "ürün_basliği": "Iphone 13 Pro",
        "ürün_url": "https://abc.com/iphone-13-pro",
        "ürün_fiyati": 22000
    }, {
        "ürün_id": 6,
        "ürün_basliği": "Iphone 13 Pro  Max",
        "ürün_url": "https://abc.com/iphone-13-pro-max",
        "ürün_fiyati": 25000
    }],
    "müsteri_id": 12,
    "satici_firma_id": 34,
    "satici_firma_adi": "Appe Türkiye"
}
var siprais_2 = {
    "siparis_id": 102,
    "siparis_tarihi": "30.12.2022",
    "ödeme_sekli": "Kredi Karti",
    "kargo_adresi": {
        "mahalle": "yahya kaptan",
        "ilce": "izmit",
        "sehir": "kocaeli"
    },
    "satin_alinan_ürünler": [{
        "ürün_id": 6,
        "ürün_basliği": "Iphone 13 Pro  Max",
        "ürün_url": "https://abc.com/iphone-13-pro-max",
        "ürün_fiyati": 25000
    }],
    "müsteri_id": 12,
    "satici_firma_id": 34,
    "satici_firma_adi": "Appe Türkiye"
}

//Soru2
var siparis1_toplam = (siprais_1.satin_alinan_ürünler[0].ürün_fiyati + siprais_1.satin_alinan_ürünler[1].ürün_fiyati) * 1.18
var siparis2_toplam = (siprais_1.satin_alinan_ürünler[0].ürün_fiyati) * 1.18

//Soru3
var toplam_siparis = siparis1_toplam + siparis2_toplam

console.log(`Siparis 1 Toplam = ${siparis1_toplam}`)
console.log(`Siparis 2 Toplam = ${siparis2_toplam}`)
console.log(`Toplam Ödenen = ${toplam_siparis}`)
//1.Soru

var ogrenci_1_isim = "ada";
var ogrenci_1_soy_isim = "bilgi";
var ogrenci_1_dogum_tarihi = 2012;
var ogrenci_1_matematik_not1 = 70;
var ogrenci_1_matematik_not2 = 70;
var ogrenci_1_matematik_not3 = 80;


var ogrenci_2_isim = "yiğit";
var ogrenci_2_soy_isim = "bilgi";
var ogrenci_2_dogum_tarihi = 2010;
var ogrenci_2_matematik_not1 = 40;
var ogrenci_2_matematik_not2 = 40;
var ogrenci_2_matematik_not3 = 50;

//2.Soru
var suanki_Yil = new Date().getFullYear();
var ogrenci_1_yas = suanki_Yil - ogrenci_1_dogum_tarihi;
var ogrenci_2_yas = suanki_Yil - ogrenci_2_dogum_tarihi;

//3.Soru

var ogrenci_1_mat_ort = (ogrenci_1_matematik_not1 + ogrenci_1_matematik_not2 + ogrenci_1_matematik_not3) / 3;
var ogrenci_2_mat_ort = (ogrenci_2_matematik_not1 + ogrenci_2_matematik_not2 + ogrenci_2_matematik_not3) / 3;

//4.Soru

var ogrenci_1_basari = ogrenci_1_mat_ort >= 50;
var ogrenci_2_basari = ogrenci_2_mat_ort >= 50;

console.log("ogrenci1yas=" + ogrenci_1_yas + " ogrenci2yas=" + ogrenci_2_yas);
console.log("ogrenci1mat_ortalama=" + parseInt(ogrenci_1_mat_ort) + " ogrenci2mat_ortalama=" + parseInt(ogrenci_2_mat_ort));
console.log("ogrenci1basari=" + ogrenci_1_basari + " ogrenci2basari=" + ogrenci_2_basari);
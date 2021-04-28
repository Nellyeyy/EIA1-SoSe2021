// Europa
document.getElementById("pic_eu").addEventListener("click", function () {
    document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.getElementById("emi_number").innerHTML = "" + eu_18;
    document.getElementById("text_emi").innerHTML = "Emission absolute of Europe in 2018";
    document.getElementById("total").innerHTML = "" + (eu_18 * 100 / ges_18).toFixed(2) + " %";
    document.getElementById("growth").innerHTML = "" + ((eu_18 - eu_08) / eu_08 * 100).toFixed(2) + " %";
    document.getElementById("change_absolut").innerHTML = "" + (eu_18 - eu_08).toFixed(2);
    document.getElementById("chart").setAttribute('style', 'height:' + (eu_18 * 100 / ges_18) + '%');
});
// Nord Amerika
document.getElementById("pic_na").addEventListener("click", function () {
    document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in North America";
    document.getElementById("emi_number").innerHTML = "" + na_18;
    document.getElementById("text_emi").innerHTML = "Emission absolute of North America in 2018";
    document.getElementById("total").innerHTML = "" + (na_18 * 100 / ges_18).toFixed(2) + " %";
    document.getElementById("growth").innerHTML = "" + ((na_18 - na_08) / na_08 * 100).toFixed(2) + " %";
    document.getElementById("change_absolut").innerHTML = "" + (na_18 - na_08).toFixed(2);
    document.getElementById("chart").setAttribute('style', 'height:' + (na_18 * 100 / ges_18) + '%');
});
// Süd Amerika
document.getElementById("pic_sa").addEventListener("click", function () {
    document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in South America";
    document.getElementById("emi_number").innerHTML = "" + sa_18;
    document.getElementById("text_emi").innerHTML = "Emission absolute of South America in 2018";
    document.getElementById("total").innerHTML = "" + (sa_18 * 100 / ges_18).toFixed(2) + " %";
    document.getElementById("growth").innerHTML = "" + ((sa_18 - sa_08) / sa_08 * 100).toFixed(2) + " %";
    document.getElementById("change_absolut").innerHTML = "" + (sa_18 - sa_08).toFixed(2);
    document.getElementById("chart").setAttribute('style', 'height:' + (sa_18 * 100 / ges_18) + '%');
});
// Afrika
document.getElementById("pic_af").addEventListener("click", function () {
    document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.getElementById("emi_number").innerHTML = "" + af_18;
    document.getElementById("text_emi").innerHTML = "Emission absolute of Africa in 2018";
    document.getElementById("total").innerHTML = "" + (af_18 * 100 / ges_18).toFixed(2) + " %";
    document.getElementById("growth").innerHTML = "" + ((af_18 - af_08) / af_08 * 100).toFixed(2) + " %";
    document.getElementById("change_absolut").innerHTML = "" + (af_18 - af_08).toFixed(2);
    document.getElementById("chart").setAttribute('style', 'height:' + (af_18 * 100 / ges_18) + '%');
});
// Asia
document.getElementById("pic_as").addEventListener("click", function () {
    document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.getElementById("emi_number").innerHTML = "" + as_18;
    document.getElementById("text_emi").innerHTML = "Emission absolute of Asia in 2018";
    document.getElementById("total").innerHTML = "" + (as_18 * 100 / ges_18).toFixed(2) + " %";
    document.getElementById("growth").innerHTML = "" + ((as_18 - as_08) / as_08 * 100).toFixed(2) + " %";
    document.getElementById("change_absolut").innerHTML = "" + (as_18 - as_08).toFixed(2);
    document.getElementById("chart").setAttribute('style', 'height:' + (as_18 * 100 / ges_18) + '%');
});
// Australien
document.getElementById("pic_au").addEventListener("click", function () {
    document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.getElementById("emi_number").innerHTML = "" + au_18;
    document.getElementById("text_emi").innerHTML = "Emission absolute of Australia in 2018";
    document.getElementById("total").innerHTML = "" + (au_18 * 100 / ges_18).toFixed(2) + " %";
    document.getElementById("growth").innerHTML = "" + ((au_18 - au_08) / au_08 * 100).toFixed(2) + " %";
    document.getElementById("change_absolut").innerHTML = "" + (au_18 - au_08).toFixed(2);
    document.getElementById("chart").setAttribute('style', 'height:' + (au_18 * 100 / ges_18) + '%');
});
// Konsolenausgabe
var Kon_Afrika = "Afrika";
var Kon_SouthAmerika = "South Amerika";
var Kon_Europa = "Europa";
var Kon_NorthAmerika = "Nord Amerika";
var Kon_Asia = "Asien";
var Kon_Australia = "Australien";
var af_18 = 1235.5;
var af_08 = 1028;
var sa_18 = 1261.5;
var sa_08 = 1132.6;
var eu_18 = 4209.3;
var eu_08 = 4965.7;
var na_18 = 6035.6;
var na_08 = 6600.4;
var as_18 = 16274.1;
var as_08 = 12954.7;
var au_18 = 2100.5;
var au_08 = 1993;
var ges_18 = eu_18 + af_18 + sa_18 + na_18 + as_18 + au_18;
function Emi(name_Kon, Kontinent_18) {
    console.log('Die Emission von ' + name_Kon + ' ist: ' + (Kontinent_18).toFixed(2) + ' kg CO2');
}
Emi(Kon_Afrika, af_18);
Emi(Kon_SouthAmerika, sa_18);
Emi(Kon_Europa, eu_18);
Emi(Kon_NorthAmerika, na_18);
Emi(Kon_Asia, as_18);
Emi(Kon_Australia, au_18);
function GesEmi(name_Kon, Kontinent_18, Ges18) {
    console.log('Relativ zur Gesamtemission der Welt verursacht ' + name_Kon + ' damit ' + (Kontinent_18 * 100 / Ges18).toFixed(2) + ' %');
}
GesEmi(Kon_Afrika, af_18, ges_18);
GesEmi(Kon_SouthAmerika, sa_18, ges_18);
GesEmi(Kon_Europa, eu_18, ges_18);
GesEmi(Kon_NorthAmerika, na_18, ges_18);
GesEmi(Kon_Asia, as_18, ges_18);
GesEmi(Kon_Australia, au_18, ges_18);
function Ver_08_18_prozent(name_Kon, Kontinent_18, Kontinent_08) {
    console.log('Für ' + name_Kon + ' hat sich 2018 im Vergleich zu 2008 die Emmission um ' + ((Kontinent_18 - Kontinent_08) / Kontinent_08 * 100).toFixed(2) + ' verändert');
}
Ver_08_18_prozent(Kon_Afrika, af_18, af_08);
Ver_08_18_prozent(Kon_SouthAmerika, sa_18, sa_08);
Ver_08_18_prozent(Kon_Europa, eu_18, eu_08);
Ver_08_18_prozent(Kon_NorthAmerika, na_18, na_08);
Ver_08_18_prozent(Kon_Asia, as_18, as_08);
Ver_08_18_prozent(Kon_Australia, au_18, au_08);
function Vergleich_08_18(name_Kon, Kontinent_18, Kontinent_08) {
    console.log('2018 im Vergleich zu 2008 sind das in ' + name_Kon + ' ' + (Kontinent_18 - Kontinent_08).toFixed(2) + ' kg CO2');
}
Vergleich_08_18(Kon_Afrika, af_18, af_08);
Vergleich_08_18(Kon_SouthAmerika, sa_18, sa_08);
Vergleich_08_18(Kon_Europa, eu_18, eu_08);
Vergleich_08_18(Kon_NorthAmerika, na_18, na_08);
Vergleich_08_18(Kon_Asia, as_18, as_08);
Vergleich_08_18(Kon_Australia, au_18, au_08);
//# sourceMappingURL=Skript_A6.js.map
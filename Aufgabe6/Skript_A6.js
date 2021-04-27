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
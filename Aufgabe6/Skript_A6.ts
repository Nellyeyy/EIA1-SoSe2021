var Kon_Afrika: string ="Afrika";
var Kon_SouthAmerika: string = "South Amerika";
var Kon_Europa: string ="Europa";
var Kon_NorthAmerika: string = "Nord Amerika";
var Kon_Asia: string ="Asien";
var Kon_Australia: string ="Australien";

var af_18: number = 1235.5;
var af_08: number = 1028;

var sa_18: number = 1261.5;
var sa_08: number = 1132.6;

var eu_18: number = 4209.3;
var eu_08: number = 4965.7;

var na_18: number = 6035.6;
var na_08: number = 6600.4;

var as_18: number = 16274.1;
var as_08: number = 12954.7;

var au_18: number = 2100.5;
var au_08: number = 1993;

var ges_18: number = eu_18 + af_18 + sa_18 + na_18 + as_18 + au_18;

function Emi (name_Kon: string, Kontinent_18: number){
    console.log('Die Emission von ' + name_Kon + ' ist: ' + (Kontinent_18).toFixed(2) + ' kg CO2');
}

Emi(Kon_Afrika, af_18);
Emi(Kon_SouthAmerika, sa_18);
Emi(Kon_Europa, eu_18);
Emi(Kon_NorthAmerika, na_18);
Emi(Kon_Asia, as_18);
Emi(Kon_Australia, au_18);

function GesEmi (name_Kon: string, Kontinent_18: number, Ges18: number){
    console.log('Relativ zur Gesamtemission der Welt verursacht ' + name_Kon + ' damit ' + (Kontinent_18*100/Ges18).toFixed(2) + ' %');
}

GesEmi(Kon_Afrika, af_18, ges_18);
GesEmi(Kon_SouthAmerika, sa_18, ges_18);
GesEmi(Kon_Europa, eu_18, ges_18);
GesEmi(Kon_NorthAmerika, na_18, ges_18);
GesEmi(Kon_Asia, as_18, ges_18);
GesEmi(Kon_Australia, au_18, ges_18);

function Ver_08_18_prozent (name_Kon: string, Kontinent_18: number, Kontinent_08: number){
console.log('Für ' + name_Kon + ' hat sich 2018 im Vergleich zu 2008 die Emmission um ' + ((Kontinent_18-Kontinent_08)/Kontinent_08*100).toFixed(2)+ ' verändert');
}

Ver_08_18_prozent (Kon_Afrika, af_18, af_08);
Ver_08_18_prozent (Kon_SouthAmerika, sa_18, sa_08);
Ver_08_18_prozent (Kon_Europa, eu_18, eu_08);
Ver_08_18_prozent (Kon_NorthAmerika, na_18, na_08);
Ver_08_18_prozent (Kon_Asia, as_18, as_08);
Ver_08_18_prozent (Kon_Australia, au_18, au_08);

function Vergleich_08_18 (name_Kon: string, Kontinent_18: number, Kontinent_08: number){
    console.log('2018 im Vergleich zu 2008 sind das in ' + name_Kon + ' ' + (Kontinent_18-Kontinent_08).toFixed(2) + ' kg CO2');
}

Vergleich_08_18 (Kon_Afrika, af_18, af_08);
Vergleich_08_18 (Kon_SouthAmerika, sa_18, sa_08);
Vergleich_08_18 (Kon_Europa, eu_18, eu_08);
Vergleich_08_18 (Kon_NorthAmerika, na_18, na_08);
Vergleich_08_18 (Kon_Asia, as_18, as_08);
Vergleich_08_18 (Kon_Australia, au_18, au_08);


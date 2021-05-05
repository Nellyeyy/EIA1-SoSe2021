// Version 2

var kon_Europa: string ="Europe";
var eu_18: number = 4209.3;
var eu_08: number = 4965.7;

var kon_NorthAmerika: string = "North America";
var na_18: number = 6035.6;
var na_08: number = 6600.4;

var kon_SouthAmerika: string = "South America";
var sa_18: number = 1261.5;
var sa_08: number = 1132.6;

var kon_Afrika: string ="Africa";
var af_18: number = 1235.5;
var af_08: number = 1028;

var kon_Asia: string ="Asia";
var as_18: number = 16274.1;
var as_08: number = 12954.7;

var kon_Australia: string ="Australia";
var au_18: number = 2100.5;
var au_08: number = 1993;

var ges_18: number = eu_18 + af_18 + sa_18 + na_18 + as_18 + au_18;

window.addEventListener("load", function () {
    document.querySelector(".Kon_Europa").addEventListener("click", function () {Emission(kon_Europa, eu_18, eu_08)});
    document.querySelector(".Kon_Northamerica").addEventListener("click", function () {Emission(kon_NorthAmerika, na_18, na_08)});
    document.querySelector(".Kon_Southamerica").addEventListener("click", function () {Emission(kon_SouthAmerika, sa_18, sa_08)});
    document.querySelector(".Kon_Africa").addEventListener("click", function () {Emission(kon_Afrika, af_18, af_08)});
    document.querySelector(".Kon_Asia").addEventListener("click", function () {Emission(kon_Asia, as_18, as_08)});
    document.querySelector(".Kon_Australia").addEventListener("click", function () {Emission(kon_Australia, au_18, au_08)});
});

function Emission(kon: string, kon_18: number, kon_08: number) {
    document.querySelector(".Konti").innerHTML = kon;
    document.querySelector(".emi_number").innerHTML = kon_18.toString();
    document.querySelector(".Konti_1").innerHTML = kon;
    document.querySelector(".total").innerHTML = (kon_18*100/ges_18).toFixed(2) + " %";
    document.querySelector(".growth").innerHTML = ((kon_18-kon_08)/kon_08*100).toFixed(2) + " %";
    document.querySelector(".change_absolut").innerHTML = (kon_18-kon_08).toFixed(2).toString();
  
    document.querySelector("#chart").setAttribute("style", "height: " + ((kon_18 / ges_18) * 100) + "%" );
};

// // Version 1

// // Europa
// document.getElementById("Kon_Europa").addEventListener("click", function(){ 
//     document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in Europe";
//     document.getElementById("emi_number").innerHTML = "" + eu_18;
//     document.getElementById("text_emi").innerHTML = "Emission absolute of Europe in 2018";
//     document.getElementById("total").innerHTML = "" + (eu_18*100/ges_18).toFixed(2) + " %";
//     document.getElementById("growth").innerHTML = "" + ((eu_18-eu_08)/eu_08*100).toFixed(2) + " %";
//     document.getElementById("change_absolut").innerHTML = "" + (eu_18-eu_08).toFixed(2);
//     document.getElementById("chart").setAttribute('style', 'height:' + (eu_18*100/ges_18) + '%');
// })

// // Nord Amerika
// document.getElementById("pic_na").addEventListener("click", function(){ 
//     document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in North America";
//     document.getElementById("emi_number").innerHTML = "" + na_18;
//     document.getElementById("text_emi").innerHTML = "Emission absolute of North America in 2018";
//     document.getElementById("total").innerHTML = "" + (na_18*100/ges_18).toFixed(2) + " %";
//     document.getElementById("growth").innerHTML = "" + ((na_18-na_08)/na_08*100).toFixed(2) + " %";
//     document.getElementById("change_absolut").innerHTML = "" + (na_18-na_08).toFixed(2);
//     document.getElementById("chart").setAttribute('style', 'height:' + (na_18*100/ges_18) + '%');
// })

// // Süd Amerika
// document.getElementById("pic_sa").addEventListener("click", function(){ 
//     document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in South America";
//     document.getElementById("emi_number").innerHTML = "" + sa_18;
//     document.getElementById("text_emi").innerHTML = "Emission absolute of South America in 2018";
//     document.getElementById("total").innerHTML = "" + (sa_18*100/ges_18).toFixed(2) + " %";
//     document.getElementById("growth").innerHTML = "" + ((sa_18-sa_08)/sa_08*100).toFixed(2) + " %";
//     document.getElementById("change_absolut").innerHTML = "" + (sa_18-sa_08).toFixed(2);
//     document.getElementById("chart").setAttribute('style', 'height:' + (sa_18*100/ges_18) + '%');
// })

// // Afrika
// document.getElementById("pic_af").addEventListener("click", function(){ 
//     document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in Africa";
//     document.getElementById("emi_number").innerHTML = "" + af_18;
//     document.getElementById("text_emi").innerHTML = "Emission absolute of Africa in 2018";
//     document.getElementById("total").innerHTML = "" + (af_18*100/ges_18).toFixed(2) + " %";
//     document.getElementById("growth").innerHTML = "" + ((af_18-af_08)/af_08*100).toFixed(2) + " %";
//     document.getElementById("change_absolut").innerHTML = "" + (af_18-af_08).toFixed(2);
//     document.getElementById("chart").setAttribute('style', 'height:' + (af_18*100/ges_18) + '%');
// })
// // Asia
// document.getElementById("pic_as").addEventListener("click", function(){ 
//     document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in Asia";
//     document.getElementById("emi_number").innerHTML = "" + as_18;
//     document.getElementById("text_emi").innerHTML = "Emission absolute of Asia in 2018";
//     document.getElementById("total").innerHTML = "" + (as_18*100/ges_18).toFixed(2) + " %";
//     document.getElementById("growth").innerHTML = "" + ((as_18-as_08)/as_08*100).toFixed(2) + " %";
//     document.getElementById("change_absolut").innerHTML = "" + (as_18-as_08).toFixed(2);
//     document.getElementById("chart").setAttribute('style', 'height:' + (as_18*100/ges_18) + '%');
// })

// // Australien
// document.getElementById("pic_au").addEventListener("click", function(){ 
//     document.getElementById("head").innerHTML = "Carbon Dioxide Emissions in Australia";
//     document.getElementById("emi_number").innerHTML = "" + au_18;
//     document.getElementById("text_emi").innerHTML = "Emission absolute of Australia in 2018";
//     document.getElementById("total").innerHTML = "" + (au_18*100/ges_18).toFixed(2) + " %";
//     document.getElementById("growth").innerHTML = "" + ((au_18-au_08)/au_08*100).toFixed(2) + " %";
//     document.getElementById("change_absolut").innerHTML = "" + (au_18-au_08).toFixed(2);
//     document.getElementById("chart").setAttribute('style', 'height:' + (au_18*100/ges_18) + '%');
// })


// Konsolenausgabe

function Emi (name_Kon: string, Kontinent_18: number){
    console.log('Die Emission von ' + name_Kon + ' ist: ' + (Kontinent_18).toFixed(2) + ' kg CO2');
}

Emi(kon_Afrika, af_18);
Emi(kon_SouthAmerika, sa_18);
Emi(kon_Europa, eu_18);
Emi(kon_NorthAmerika, na_18);
Emi(kon_Asia, as_18);
Emi(kon_Australia, au_18);

function GesEmi (name_Kon: string, Kontinent_18: number, Ges18: number){
    console.log('Relativ zur Gesamtemission der Welt verursacht ' + name_Kon + ' damit ' + (Kontinent_18*100/Ges18).toFixed(2) + ' %');
}

GesEmi(kon_Afrika, af_18, ges_18);
GesEmi(kon_SouthAmerika, sa_18, ges_18);
GesEmi(kon_Europa, eu_18, ges_18);
GesEmi(kon_NorthAmerika, na_18, ges_18);
GesEmi(kon_Asia, as_18, ges_18);
GesEmi(kon_Australia, au_18, ges_18);

function Ver_08_18_prozent (name_Kon: string, Kontinent_18: number, Kontinent_08: number){
console.log('Für ' + name_Kon + ' hat sich 2018 im Vergleich zu 2008 die Emmission um ' + ((Kontinent_18-Kontinent_08)/Kontinent_08*100).toFixed(2)+ ' verändert');
}

Ver_08_18_prozent (kon_Afrika, af_18, af_08);
Ver_08_18_prozent (kon_SouthAmerika, sa_18, sa_08);
Ver_08_18_prozent (kon_Europa, eu_18, eu_08);
Ver_08_18_prozent (kon_NorthAmerika, na_18, na_08);
Ver_08_18_prozent (kon_Asia, as_18, as_08);
Ver_08_18_prozent (kon_Australia, au_18, au_08);

function Vergleich_08_18 (name_Kon: string, Kontinent_18: number, Kontinent_08: number){
    console.log('2018 im Vergleich zu 2008 sind das in ' + name_Kon + ' ' + (Kontinent_18-Kontinent_08).toFixed(2) + ' kg CO2');
}

Vergleich_08_18 (kon_Afrika, af_18, af_08);
Vergleich_08_18 (kon_SouthAmerika, sa_18, sa_08);
Vergleich_08_18 (kon_Europa, eu_18, eu_08);
Vergleich_08_18 (kon_NorthAmerika, na_18, na_08);
Vergleich_08_18 (kon_Asia, as_18, as_08);
Vergleich_08_18 (kon_Australia, au_18, au_08);
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
var ges_af_18: number = af_18 * 100 / ges_18;
var ges_sa_18: number = sa_18 * 100 / ges_18;
var ges_eu_18: number = eu_18 * 100 / ges_18;
var ges_na_18: number = na_18 * 100 / ges_18;
var ges_as_18: number = as_18 * 100 / ges_18;
var ges_au_18: number = au_18 * 100 / ges_18;

var ges_08: number = eu_08 + af_08 + sa_08 + na_08 + as_08 + au_08;
var ges_af_08: number = af_08 * 100 / ges_08;
var ges_sa_08: number = sa_08 * 100 / ges_08;
var ges_eu_08: number = eu_08 * 100 / ges_08;
var ges_na_08: number = na_08 * 100 / ges_08;
var ges_as_08: number = as_08 * 100 / ges_08;
var ges_au_08: number = au_08 * 100 / ges_08;



console.log('Die Emission von Afrika ist: 1235.5 kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + ges_af_18 + ' %');

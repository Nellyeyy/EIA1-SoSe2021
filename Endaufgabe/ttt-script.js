// Variablen
var leicht;
var mittel;
var schwer;
var spielfeld;
var spielfeld4x4;
var spielfeld5x5;
var hilfe;
var spielfigur;
var neustart;
var eins;
var zwei;
var drei;
var vier;
var fuenf;
var sechs;
var sieben;
var acht;
var neun;
var zehn;
var elf;
var zwoelf;
var dreiz;
var vierz;
var fuenfz;
var sechsz;
var siebz;
var achz;
var neunz;
var z;
var ez;
var zz;
var dz;
var vz;
var fz;
var aa;
var bb;
var cc;
var dd;
var ee;
var ff;
var gg;
var hh;
var ii;
var jj;
var kk;
var ll;
var mm;
var nn;
var oo;
var pp;
var qq;
var rr;
var ss;
var tt;
var uu;
var vv;
var ww;
var xx;
var yy;
window.addEventListener("load", function () {
    // Zuweisungen
    leicht = document.querySelector("#leicht");
    mittel = document.querySelector("#mittel");
    schwer = document.querySelector("#schwer");
    spielfeld = document.querySelector("#spielfeld");
    spielfeld4x4 = document.querySelector("#spielfeld4x4");
    spielfeld5x5 = document.querySelector("#spielfeld5x5");
    hilfe = document.querySelector("#hilfe");
    spielfigur = document.querySelector(".spielfigur");
    neustart = document.querySelector("#neustart");
    eins = document.querySelector("#eins");
    zwei = document.querySelector("#zwei");
    drei = document.querySelector("#drei");
    vier = document.querySelector("#vier");
    fuenf = document.querySelector("#fuenf");
    sechs = document.querySelector("#sechs");
    sieben = document.querySelector("#sieben");
    acht = document.querySelector("#acht");
    neun = document.querySelector("#neun");
    zehn = document.querySelector("#zehn");
    elf = document.querySelector("#elf");
    zwoelf = document.querySelector("#zwoelf");
    dreiz = document.querySelector("#dreiz");
    vierz = document.querySelector("#vierz");
    fuenfz = document.querySelector("#fuenfz");
    sechsz = document.querySelector("#sechsz");
    siebz = document.querySelector("#siebz");
    achz = document.querySelector("#achz");
    neunz = document.querySelector("#neunz");
    z = document.querySelector("#z");
    ez = document.querySelector("#ez");
    zz = document.querySelector("#zz");
    dz = document.querySelector("#dz");
    vz = document.querySelector("#vz");
    fz = document.querySelector("#fz");
    aa = document.querySelector(".aa");
    bb = document.querySelector(".bb");
    cc = document.querySelector(".cc");
    dd = document.querySelector(".dd");
    ee = document.querySelector(".ee");
    ff = document.querySelector(".ff");
    gg = document.querySelector(".gg");
    hh = document.querySelector(".hh");
    ii = document.querySelector(".ii");
    jj = document.querySelector(".jj");
    kk = document.querySelector(".kk");
    ll = document.querySelector(".ll");
    mm = document.querySelector(".mm");
    nn = document.querySelector(".nn");
    oo = document.querySelector(".oo");
    pp = document.querySelector(".pp");
    qq = document.querySelector(".qq");
    rr = document.querySelector(".rr");
    ss = document.querySelector(".ss");
    tt = document.querySelector(".tt");
    uu = document.querySelector(".uu");
    vv = document.querySelector(".vv");
    ww = document.querySelector(".ww");
    xx = document.querySelector(".xx");
    yy = document.querySelector(".yy");
    // Hilfebutton
    var erklaeren = document.getElementById("erklaerung");
    hilfe.addEventListener("click", erklaerung);
    function erklaerung() {
        if (erklaeren.getAttribute("class") == "ausblenden") {
            erklaeren.setAttribute("class", "");
        }
        else {
            erklaeren.setAttribute("class", "ausblenden");
        }
    }
    // Auswahl der Schwierigkeit
    // Variablen für Schwierifkeit
    var activeeins = document.getElementById("spielfeld4x4");
    var activezwei = document.getElementById("spielfeld5x5");
    var buttonleicht = document.getElementById("leicht");
    var buttonmittel = document.getElementById("mittel");
    var buttonschwer = document.getElementById("schwer");
    // 1. Leicht
    leicht.addEventListener("click", playleicht);
    function playleicht() {
        // Hintergrundfarbe
        if (buttonleicht.getAttribute("class") == "active") {
            buttonleicht.setAttribute("class", "");
        }
        else {
            buttonleicht.setAttribute("class", "active");
        }
        // Ausblenden des 4x4 und 5x5
        if (activezwei.getAttribute("class") == "active") {
            activezwei.setAttribute("class", "");
        }
        else {
            activezwei.setAttribute("class", "active");
        }
        if (activeeins.getAttribute("class") == "active") {
            activeeins.setAttribute("class", "");
        }
        else {
            activeeins.setAttribute("class", "active");
        }
        // Hintergrund der beiden anderen Button ausblenden bei klicken des aktuellen Buttons
        if (buttonmittel.getAttribute("class") == "active") {
            buttonmittel.setAttribute("class", "");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            buttonschwer.setAttribute("class", "");
        }
        // Einblenden des 3x3 wenn vorher von anderer Schwierigkeit kommend
        if (activezwei.getAttribute("class") == "") {
            activezwei.setAttribute("class", "active");
        }
        if (activeeins.getAttribute("class") == "") {
            activeeins.setAttribute("class", "active");
        }
        // Bei deaktivieren von Button wird Start gezeigt
        if (buttonleicht.getAttribute("class") == "") {
            activeeins.setAttribute("class", "");
            activezwei.setAttribute("class", "");
        }
    }
    // Mittleres Spiel
    mittel.addEventListener("click", playmittel);
    function playmittel() {
        // Hintergrundfarbe
        if (buttonmittel.getAttribute("class") == "active") {
            buttonmittel.setAttribute("class", "");
        }
        else {
            buttonmittel.setAttribute("class", "active");
        }
        // Ausblenden des 5x5
        if (activezwei.getAttribute("class") == "active") {
            activezwei.setAttribute("class", "");
        }
        else {
            activezwei.setAttribute("class", "active");
        }
        // Hintergrund der beiden anderen Button ausblenden bei klicken des aktuellen Buttons
        if (buttonleicht.getAttribute("class") == "active") {
            buttonleicht.setAttribute("class", "");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            buttonschwer.setAttribute("class", "");
        }
        // Einblenden des 4x4 wenn vorher von anderer Schwierigkeit kommend
        if (activeeins.getAttribute("class") == "active") {
            activeeins.setAttribute("class", "");
        }
        if (activezwei.getAttribute("class") == "") {
            activezwei.setAttribute("class", "active");
        }
        // Bei deaktivieren von Button wird Start gezeigt
        if (buttonmittel.getAttribute("class") == "") {
            activeeins.setAttribute("class", "");
            activezwei.setAttribute("class", "");
        }
    }
    // 3. Schwer
    schwer.addEventListener("click", playschwer);
    function playschwer() {
        // Hintergrundfarbe
        if (buttonschwer.getAttribute("class") == "active") {
            buttonschwer.setAttribute("class", "");
        }
        else {
            buttonschwer.setAttribute("class", "active");
        }
        // Hintergrund der beiden anderen Button ausblenden bei klicken des aktuellen Buttons
        if (buttonleicht.getAttribute("class") == "active") {
            buttonleicht.setAttribute("class", "");
        }
        if (buttonmittel.getAttribute("class") == "active") {
            buttonmittel.setAttribute("class", "");
        }
        // Einblenden des 5x5 wenn vorher von anderer Schwierigkeit kommend
        if (activezwei.getAttribute("class") == "active") {
            activezwei.setAttribute("class", "");
        }
        if (activeeins.getAttribute("class") == "active") {
            activeeins.setAttribute("class", "");
        }
    }
    // Züge/ Kreis und Kreiz setzen
    eins.addEventListener("click", play);
    function play() {
        if (buttonleicht.getAttribute("class") == "active") {
            aa.classList.remove("aa");
        }
        if (buttonmittel.getAttribute("class") == "active") {
            aa.classList.remove("aa");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            aa.classList.remove("aa");
        }
    }
    zwei.addEventListener("click", palyz);
    function palyz() {
        if (buttonleicht.getAttribute("class") == "active") {
            bb.classList.remove("bb");
        }
        if (buttonmittel.getAttribute("class") == "active") {
            bb.classList.remove("bb");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            bb.classList.remove("bb");
        }
    }
    drei.addEventListener("click", playd);
    function playd() {
        if (buttonleicht.getAttribute("class") == "active") {
            cc.classList.remove("cc");
        }
        if (buttonmittel.getAttribute("class") == "active") {
            cc.classList.remove("cc");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            cc.classList.remove("cc");
        }
    }
    vier.addEventListener("click", playv);
    function playv() {
        if (buttonleicht.getAttribute("class") == "active") {
            dd.classList.remove("dd");
        }
        if (buttonmittel.getAttribute("class") == "active") {
            dd.classList.remove("dd");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            dd.classList.remove("dd");
        }
    }
    fuenf.addEventListener("click", playf);
    function playf() {
        if (buttonleicht.getAttribute("class") == "active") {
            ee.classList.remove("ee");
        }
        if (buttonmittel.getAttribute("class") == "active") {
            ee.classList.remove("ee");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            ee.classList.remove("ee");
        }
    }
    sechs.addEventListener("click", plays);
    function plays() {
        if (buttonleicht.getAttribute("class") == "active") {
            ff.classList.remove("ff");
        }
        if (buttonmittel.getAttribute("class") == "active") {
            ff.classList.remove("ff");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            ff.classList.remove("ff");
        }
    }
    sieben.addEventListener("click", playsi);
    function playsi() {
        if (buttonleicht.getAttribute("class") == "active") {
            gg.classList.remove("gg");
        }
        if (buttonmittel.getAttribute("class") == "active") {
            gg.classList.remove("gg");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            gg.classList.remove("gg");
        }
    }
    acht.addEventListener("click", playa);
    function playa() {
        if (buttonleicht.getAttribute("class") == "active") {
            hh.classList.remove("hh");
        }
        if (buttonmittel.getAttribute("class") == "active") {
            hh.classList.remove("hh");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            hh.classList.remove("hh");
        }
    }
    neun.addEventListener("click", playn);
    function playn() {
        if (buttonleicht.getAttribute("class") == "active") {
            ii.classList.remove("ii");
        }
        if (buttonmittel.getAttribute("class") == "active") {
            ii.classList.remove("ii");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            ii.classList.remove("ii");
        }
    }
    zehn.addEventListener("click", playz);
    function playz() {
        if (buttonmittel.getAttribute("class") == "active") {
            jj.classList.remove("jj");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            jj.classList.remove("jj");
        }
    }
    elf.addEventListener("click", playez);
    function playez() {
        if (buttonmittel.getAttribute("class") == "active") {
            kk.classList.remove("kk");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            kk.classList.remove("kk");
        }
    }
    zwoelf.addEventListener("click", playzz);
    function playzz() {
        if (buttonmittel.getAttribute("class") == "active") {
            ll.classList.remove("ll");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            ll.classList.remove("ll");
        }
    }
    dreiz.addEventListener("click", playdz);
    function playdz() {
        if (buttonmittel.getAttribute("class") == "active") {
            mm.classList.remove("mm");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            mm.classList.remove("mm");
        }
    }
    vierz.addEventListener("click", playvz);
    function playvz() {
        if (buttonmittel.getAttribute("class") == "active") {
            nn.classList.remove("nn");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            nn.classList.remove("nn");
        }
    }
    fuenfz.addEventListener("click", playfz);
    function playfz() {
        if (buttonmittel.getAttribute("class") == "active") {
            oo.classList.remove("oo");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            oo.classList.remove("oo");
        }
    }
    sechsz.addEventListener("click", playsz);
    function playsz() {
        if (buttonmittel.getAttribute("class") == "active") {
            pp.classList.remove("pp");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            pp.classList.remove("pp");
        }
    }
    siebz.addEventListener("click", playsiz);
    function playsiz() {
        if (buttonschwer.getAttribute("class") == "active") {
            qq.classList.remove("qq");
        }
    }
    achz.addEventListener("click", playaz);
    function playaz() {
        if (buttonschwer.getAttribute("class") == "active") {
            rr.classList.remove("rr");
        }
    }
    neunz.addEventListener("click", playnz);
    function playnz() {
        if (buttonschwer.getAttribute("class") == "active") {
            ss.classList.remove("ss");
        }
    }
    z.addEventListener("click", playzzz);
    function playzzz() {
        if (buttonschwer.getAttribute("class") == "active") {
            tt.classList.remove("tt");
        }
    }
    ez.addEventListener("click", playzzzz);
    function playzzzz() {
        if (buttonschwer.getAttribute("class") == "active") {
            uu.classList.remove("uu");
        }
    }
    zz.addEventListener("click", playzdz);
    function playzdz() {
        if (buttonschwer.getAttribute("class") == "active") {
            vv.classList.remove("vv");
        }
    }
    dz.addEventListener("click", playzvz);
    function playzvz() {
        if (buttonschwer.getAttribute("class") == "active") {
            ww.classList.remove("ww");
        }
    }
    vz.addEventListener("click", playzfz);
    function playzfz() {
        if (buttonschwer.getAttribute("class") == "active") {
            xx.classList.remove("xx");
        }
    }
    fz.addEventListener("click", playzsz);
    function playzsz() {
        if (buttonschwer.getAttribute("class") == "active") {
            yy.classList.remove("yy");
        }
    }
    // Neustart
    neustart.addEventListener("click", neu);
    function neu() {
        console.log("löschen");
    }
});
//# sourceMappingURL=ttt-script.js.map
function showHiddenNav() {
    var btn = document.querySelector("#hiiden-nav");
    var btn1 = document.querySelector("#Trasform-y");
    if(btn.className === "hidden-nav-detail"){
        btn.className += " hidden-nav-S";
        btn1.className += " transform-y";
    }
    else {
        btn.className = "hidden-nav-detail";
        btn1.className = "hidden-nav-detail-container";
    }
}

function ShowSpotTrade1() {
    var btn = document.querySelector("#ShowSpot");
    var btn1 = document.querySelector("#spot-trade");
    if (btn.className === "spot-trade-item2"){
        btn.className += " show-spot";
        btn1.className += " b-radius";
    }
    else {
        btn.className = "spot-trade-item2";
        btn1.className = "spot-trade-content";
    }
}

function ShowSpotTrade2() {
    var btn = document.querySelector("#ShowSpot1");
    var btn1 = document.querySelector("#spot-trade1");
    if (btn.className === "spot-trade-item2"){
        btn.className += " show-spot";
        btn1.className += " b-radius";
    }
    else {
        btn.className = "spot-trade-item2";
        btn1.className = "spot-trade-content";
    }
}

function ShowSpotTrade3() {
    var btn = document.querySelector("#ShowSpot2");
    var btn1 = document.querySelector("#spot-trade2");
    if (btn.className === "spot-trade-item2"){
        btn.className += " show-spot";
        btn1.className += " b-radius";
    }
    else {
        btn.className = "spot-trade-item2";
        btn1.className = "spot-trade-content";
    }
}

function OffSpotTrade1() {
    var btn = document.querySelector("#ShowSpot");
    var btn1 = document.querySelector("#spot-trade");
    btn.className = "spot-trade-item2";
    btn1.className = "spot-trade-content";
}

function OffSpotTrade2() {
    var btn = document.querySelector("#ShowSpot1");
    var btn1 = document.querySelector("#spot-trade1");
    btn.className = "spot-trade-item2";
    btn1.className = "spot-trade-content";
}

function OffSpotTrade3() {
    var btn = document.querySelector("#ShowSpot2");
    var btn1 = document.querySelector("#spot-trade2");
    btn.className = "spot-trade-item2";
    btn1.className = "spot-trade-content";
}

function ShowHeader2() {
    var btn = document.querySelector("#header2-left-menu");
    // var btn3 = document.querySelector("#header2-left-menu-container");
    if (btn.className === "header2-left-menu"){
        btn.className += " show1";
        // btn3.className = "header2-left-menu-container";
    }
    else {
        btn.className = "header2-left-menu";
        // btn3.className = "header2-left-menu-container Translate";
    }
}

function Translate1() {
    var btn3 = document.querySelector("#header2-left-menu-container");
    var btn4 = document.querySelector("#mask");
    if ( btn3.className === "header2-left-menu-container"){
        btn3.className = "Translate";
        btn4.className += " mask";
    }
    else {
        btn3.className = "header2-left-menu-container";
        btn4.className = "back";
    }
}

function OffHeader2() {
    var btn2 = document.querySelector("#header2-left-menu");
    var btn3 = document.querySelector("#header2-left-menu-container");
    var btn4 = document.querySelector("#mask");
    var btn5 = document.querySelector("#about-menu")
    btn2.className = "header2-left-menu";
    btn3.className = "header2-left-menu-container";
    btn4.className = "back";
    btn5.className = "about-menu";
}

function ShowAboutMenu() {
    var btn5 = document.querySelector("#about-menu");
    if(btn5.className === "about-menu"){
        btn5.className += " show2";
    }
    else {
        btn5.className = "about-menu";
    }
}

function ShowFilterMenu() {
    var btn6 = document.getElementById("W-991-filters");
    var btn7 = document.getElementsByClassName("drawer-mask-filters")[0];
    var btn8 = document.getElementsByClassName("W-991-filters-container")[0];
    btn6.className += " W-100";
    btn7.className += " filters-show";
    btn8.className += " W-991-filters-container-shadow";
    btn8.classList.remove("Translate2");
}

function HideFiltersMenu() {
    var btn6 = document.getElementById("W-991-filters");
    var btn7 = document.getElementsByClassName("drawer-mask-filters")[0];
    var btn8 = document.getElementsByClassName("W-991-filters-container")[0];
    btn6.className = "W-991-filters";
    btn7.classList.remove("filters-show");
    btn8.classList.remove("W-991-filters-container-shadow");
    btn8.className += " Translate2";
}

function ShowFilters() {
    var btn1 = document.getElementById("left-filter-btn-content");
    var btn2 = document.getElementById("left-filter-container");
    if(btn2.className === "left-filter-container show3"){
        btn2.className = "left-filter-container off1 Translate-2";
        btn1.className += " Rotate1";
    }
    else {
        btn2.className = "left-filter-container show3";
        btn1.className = "fa-solid fa-angle-left";
    }
}

function ShowTitle() {
    var btn3 = document.getElementById("left-filter-container");
    var btn4 = document.getElementById("left-filter-btn-title1");
    var btn5 = document.getElementById("left-filter-btn-title2");
    if (btn3.className === "left-filter-container show3"){
        btn4.className += " show4";
    }
    else if(btn3.className === "left-filter-container off1"){
        btn5.className += " show4";
    }
    else {
        btn4.className = "left-filter-btn-title1";
        btn5.className = "left-filter-btn-title2";
    }
}

function OffTitle() {
    var btn4 = document.getElementById("left-filter-btn-title1");
    var btn5 = document.getElementById("left-filter-btn-title2");
    btn4.className = "left-filter-btn-title1";
    btn5.className = "left-filter-btn-title2";
}

function ShowMarketCap() {
    var btn1 = document.getElementsByClassName("button-colors1")[0];
    var btn2 = document.getElementsByClassName("button-colors2")[0];
    var text1 = document.getElementById("filters-row-8-title-1");
    var btn3 = document.getElementsByClassName("filters-row-8-2-container")[0];
    var btn4 = document.getElementsByClassName("filters-row-8-2-container")[1];
    btn1.classList.replace("button-colors1","button-colors2");
    btn2.classList.replace("button-colors2","button-colors1");
    text1.innerHTML = "M.cap range (USD)";
    btn3.classList.remove("off2");
    btn4.classList = "filters-row-8-2-container off2";

}

function ShowVolume() {
    var btn1 = document.getElementsByClassName("button-colors1")[0];
    var btn2 = document.getElementsByClassName("button-colors2")[0];
    var text1 = document.getElementById("filters-row-8-title-1");
    var btn3 = document.getElementsByClassName("filters-row-8-2-container")[0];
    var btn4 = document.getElementsByClassName("filters-row-8-2-container")[1];
    btn1.classList.replace("button-colors1","button-colors2");
    btn2.classList.replace("button-colors2","button-colors1");
    text1.innerHTML = "Volume range (USD)";
    btn4.classList.remove("off2");
    btn3.classList = "filters-row-8-2-container off2";
}

function hoverColor1(){
    var btn1 = document.getElementsByClassName("coin1-header")[0];
    var btn2 = document.getElementsByClassName("styles_star__iLnXb")[0];
    if(btn1.className === "coin1-header"){
        btn1.classList += " coin-1-hover";
        btn2.classList.remove("opacity-0");
    }
    else {
        btn1.classList.remove("coin-1-hover");
        btn2.classList += " opacity-0";
    }
}

function hoverColor1Out(){
    var btn1 = document.getElementsByClassName("coin1-header")[0];
    var btn2 = document.getElementsByClassName("styles_star__iLnXb")[0];
    btn1.classList.remove("coin-1-hover");
    btn2.classList += " opacity-0";
}

function hoverColor2(){
    var btn3 = document.getElementsByClassName("coin2-header")[0];
    var btn4 = document.getElementsByClassName("styles_star__iLnXb")[1];
    if(btn3.className === "coin2-header"){
        btn3.classList += " coin-2-hover";
        btn4.classList.remove("opacity-0");
    }
    else {
        btn3.classList.remove("coin-2-hover");
        btn4.classList += " opacity-0";
    }
}

function hoverColor2Out(){
    var btn3 = document.getElementsByClassName("coin2-header")[0];
    var btn4 = document.getElementsByClassName("styles_star__iLnXb")[1];
    btn3.classList.remove("coin-2-hover");
    btn4.classList += " opacity-0";
}

function hoverColor3(){
    var btn5 = document.getElementsByClassName("coin-DBFT-header")[0];
    var btn6 = document.getElementsByClassName("_66rAhH")[0];
    if(btn5.className === "coin-DBFT-header"){
        btn5.classList += " coin-DBFT-hover";
        btn6.classList.remove("opacity-0");
    }
    else {
        btn5.classList.remove("coin-DBFT-hover");
        btn6.classList += " opacity-0";
    }
}

function hoverColor3Out(){
    var btn5 = document.getElementsByClassName("coin-DBFT-header")[0];
    var btn6 = document.getElementsByClassName("_66rAhH")[0];
    btn5.classList.remove("coin-DBFT-hover");
    btn6.classList += " opacity-0";
}

function hoverColor4(){
    var btn7 = document.getElementsByClassName("coin-Other-header")[0];
    if(btn7.className === "coin-Other-header"){
        btn7.classList += " coin-Other-hover";
    }
    else {
        btn7.classList.remove("coin-Other-hover");
    }
    var btn3 = document.getElementsByClassName("coin-group3-3-header")[0];
    if(btn3.className === "coin-group3-3-header"){
        btn3.classList += " coin-group3-hover";
    }
    else {
        btn3.classList.remove("coin-group3-hover");
    }
}

function hoverColor4Out(){
    var btn7 = document.getElementsByClassName("coin-Other-header")[0];
    btn7.classList.remove("coin-Other-hover");
    var btn3 = document.getElementsByClassName("coin-group3-3-header")[0];
    btn3.classList.remove("coin-group3-hover");
}

function hoverColor5(){
    var btn8 = document.getElementsByClassName("coin-13-header")[0];
    var btn9 = document.getElementsByClassName("_66rAhH")[1];
    if(btn8.className === "coin-13-header"){
        btn8.classList += " coin-13-hover";
        btn9.classList.remove("opacity-0");
    }
    else {
        btn8.classList.remove("coin-13-hover");
        btn9.classList += " opacity-0";
    }
}

function hoverColor5Out(){
    var btn8 = document.getElementsByClassName("coin-13-header")[0];
    var btn9 = document.getElementsByClassName("_66rAhH")[1];
    btn8.classList.remove("coin-13-hover");
    btn9.classList += " opacity-0";
}

function hoverColor6(){
    var btn1 = document.getElementsByClassName("coin-14-header")[0];
    if(btn1.className === "coin-14-header"){
        btn1.classList += " coin-14-hover";
    }
    else {
        btn1.classList.remove("coin-14-hover");
    }
}

function hoverColor6Out(){
    var btn1 = document.getElementsByClassName("coin-14-header")[0];
    btn1.classList.remove("coin-14-hover");
}

function hoverColor7(){
    var btn3 = document.getElementsByClassName("coin-16-header")[0];
    if(btn3.className === "coin-16-header"){
        btn3.classList += " coin-16-hover";
    }
    else {
        btn3.classList.remove("coin-16-hover");
    }
}

function hoverColor7Out(){
    var btn3 = document.getElementsByClassName("coin-16-header")[0];
    btn3.classList.remove("coin-16-hover");
}

function hoverColor8(){
    var btn3 = document.getElementsByClassName("coin-group3-1-header")[0];
    var btn4 = document.getElementsByClassName("styles_star__iLnXb")[2];
    if(btn3.className === "coin-group3-1-header"){
        btn3.classList += " coin-group3-hover";
        btn4.classList.remove("opacity-0");
    }
    else {
        btn3.classList.remove("coin-group3-hover");
        btn4.classList += " opacity-0";
    }
}

function hoverColor8Out(){
    var btn3 = document.getElementsByClassName("coin-group3-1-header")[0];
    var btn4 = document.getElementsByClassName("styles_star__iLnXb")[2];
    btn3.classList.remove("coin-group3-hover");
    btn4.classList += " opacity-0";
}

function hoverColor9(){
    var btn3 = document.getElementsByClassName("coin-group3-2-header")[0];
    var btn4 = document.getElementsByClassName("_66rAhH")[2];
    if(btn3.className === "coin-group3-2-header"){
        btn3.classList += " coin-group3-hover";
        btn4.classList.remove("opacity-0");
    }
    else {
        btn3.classList.remove("coin-group3-hover");
        btn4.classList += " opacity-0";
    }
}

function hoverColor9Out(){
    var btn3 = document.getElementsByClassName("coin-group3-2-header")[0];
    var btn4 = document.getElementsByClassName("_66rAhH")[2];
    btn3.classList.remove("coin-group3-hover");
    btn4.classList += " opacity-0";
}

function hoverColor10(){
    var btn3 = document.getElementsByClassName("coin-group3-3-header")[0];
    if(btn3.className === "coin-group3-3-header"){
        btn3.classList += " coin-group3-hover";
    }
    else {
        btn3.classList.remove("coin-group3-hover");
    }
    var btn7 = document.getElementsByClassName("coin-Other-header")[0];
    if(btn7.className === "coin-Other-header"){
        btn7.classList += " coin-Other-hover";
    }
    else {
        btn7.classList.remove("coin-Other-hover");
    }
}

function hoverColor10Out(){
    var btn3 = document.getElementsByClassName("coin-group3-3-header")[0];
    btn3.classList.remove("coin-group3-hover");
    var btn7 = document.getElementsByClassName("coin-Other-header")[0];
    btn7.classList.remove("coin-Other-hover");
}
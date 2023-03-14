//al caricamento della pagina...
window.onload = function() {

    //funzione per aggiunger una classe ad uno specifico elemento
    function addClass(element, className) {
        element.classList.add(className);
    }
    
    //funzione per rimuovere una classe ad uno specifico elemento
    function removeClass(element, className) {
        element.classList.remove(className);
    }
    
    //funzione per rimuovere una classe ad uno specifico elemento con un certo ritardo
    //il ritardo è espresso in ms
    function removeClassWithTimeout(element, className, timeout) {
        //funzione js che ci permette di ritardare l'esecuzione di una funzione
        setTimeout(removeClass, timeout, element, className);
    }

    //recupero le varie sezioni del documento e le inserisco in un array
    let arr = [];
    let navbar = document.getElementsByClassName("navbar")[0];
    arr.push(navbar);
    let header = document.getElementsByTagName("header")[0];
    arr.push(header);
    let section1 = document.getElementById("trendingNowSection");
    arr.push(section1);
    let section2 = document.getElementById("watchItAgainSection");
    arr.push(section2);
    let section3 = document.getElementById("newReleasesSection");
    arr.push(section3);
    let footer = document.getElementsByTagName("footer")[0];
    arr.push(footer);

    //aggiungo ad ogni sezione la classe css animation
    for(let element of arr) {
        addClass(element, "animation");
    }

    //aggiungo ad ogni sezione una specifica classe css
    addClass(navbar, "navbarAnimation");
    addClass(header, "headerAnimation");
    addClass(section1, "trendingNowSectionAnimation");
    addClass(section2, "watchItAgainSectionAnimation");
    addClass(section3, "newReleasesSectionAnimation");
    addClass(footer, "footerAnimation");

    //rimuove in modo ritardato la classe opacity-0 per mantenere l'effetto desiderato
    removeClassWithTimeout(navbar, "opacity-0", 1000);
    removeClassWithTimeout(header, "opacity-0", 3000);
    removeClassWithTimeout(section1, "opacity-0", 5000);
    removeClassWithTimeout(section2, "opacity-0", 7000);
    removeClassWithTimeout(section3, "opacity-0", 9000);
    removeClassWithTimeout(footer, "opacity-0", 11000);

}
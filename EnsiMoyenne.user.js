// ==UserScript==
// @name         EnsiMoyenne
// @namespace    http://github.com/Betcheg
// @version      1.0
// @description  Calculer la moyenne générale automatiquement
// @author       Betcheg
// @match        https://intranet.ensimag.fr/Zenith2/ConsultNotes*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

   var k=0; // Coefficient total
   var m=0; // Nombre de points total
   var color = (($(".odd").length - $(".even").length) > 0) ? "even" : "odd"; // Couleur de la dernière ligne
   var e = $("td:nth-child(4)"); // Tableau de notes
   var c = $("td:nth-child(2)"); // Tableau de coeff
   e.each(function (i,v){m+=((e.eq(i).text()) * parseFloat(c.eq(i).text()) );k+=parseFloat(c.eq(i).text());});
   $("table").append("<tr class="+color+"><td><b>Moyenne</b></td><td></td><td></td><td><b>"+ (m/k).toFixed(3)+"</b></td><td></td>");

})();
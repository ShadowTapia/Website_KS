/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery
         var video = sym.$("videoSaludo");
         $(video).html('<video poster="../videos/SaludoCamPoster.jpg" controls="controls" src="../videos/saludoCam.mp4" width="320" height="280"  type="video/mp4"/>');

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-13068990");